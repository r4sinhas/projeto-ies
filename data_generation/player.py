from datetime import date
import math
import random
import time
import json
import mysql.connector
from rabbitmq import Queue
import argparse
import multiprocessing

GAME_TIME = 90
GAME_TIME = GAME_TIME*60


mydb = mysql.connector.connect(
	host="localhost",
	user="admin",
	passwd="admin",
	database="ies_db"
)

mycursor = mydb.cursor()

class Player:

	def __init__(self, start_time, statsid, live):
		mycursor.execute(f"SELECT player_id FROM stats_by_game WHERE id={statsid};")
		self.id = mycursor.fetchone()[0]
		self.statsid = statsid
		if live:
			self.queue = Queue("localhost", 5672, "admin", "admin", "live_data", durable=False)
		else:
			self.queue = Queue("localhost", 5672, "admin", "admin", "player_data")
		self.live_queue = None
		self.queue.connect()
		mycursor.execute(f"SELECT age, height, last_stamina FROM player WHERE id={self.id};")
		result = mycursor.fetchone()
		self.age = result[0]
		self.height = result[1]
		last_stamina = result[2]
		self.age_factor = max(131/21000*(self.age**2) - 6247/21000*self.age + 1209/350, 0)
		self.stamina = min(self.get_stamina() + last_stamina, 100)
		self.condition = min(self.get_condition(), 1)
		self.v_max = -4/7*self.height+957/7
		self.last_speed = 0
		self.last_bpm = 100
		self.last_t = start_time
		self.tm = None
		self.start_point = None

	def send(self, m):
		message = json.dumps(m)
		self.queue.send(message)
		if self.live_queue:
			self.live_queue.send(message)

	def heart_rate(self, run):
		init = self.last_bpm
		if run == 0:
			if init > 125+10*(1-self.stamina/100):
				self.last_bpm = init-0.5-0.5*(1-self.stamina/100)
			else:
				self.last_bpm = max(init-0.25, 95+10*(1-self.stamina/100)+random.random()*10)
		elif run == 1:
			if init > 145+10*(1-self.stamina/100):
				self.last_bpm = init-0.1-0.1*(((self.age_factor+1)/3.7))
			elif init < 125+10*(1-self.stamina/100):
				self.last_bpm = init+0.21+2*self.stamina/100+0.5*((self.age_factor+1)/3.7)
			else:
				self.last_bpm = max(init-(0.8*self.stamina/100), 130+10*(1-self.stamina/100)+random.random()*10)
		else:
			self.last_bpm = min(init*(1.1+0.1*(((self.age_factor+1)/3.7)-0.1*(self.stamina/100))), 185+10*(1-self.stamina/100)+random.random()*10)
		return int(self.last_bpm)

	def eletrocardiogram(self, bpm):
		t=[self.last_t]
		ecg=[0]
		sec = 1 - self.last_t%1
		nbps = int(bpm/60*sec)
		pr=0.224653-0.000846939*bpm
		qrs=0.098-0.0003*bpm
		qt=0.535988-0.00192237*bpm-qrs

		if self.last_t == int(self.last_t): 
			nbps+=1
			start = self.last_t
		else:
			start = self.last_t+(sec-nbps*60/bpm)/2

		for _ in range(nbps):
			#pr
			for i in range(11):
				t.append(start+pr/20*i)
				ecg.append(math.sqrt(max((pr/2)**2-(pr/20*i-pr/4)**2/((pr/4)**2)*((pr/2)**2), 0)))
			#qrs
			t.extend([start+pr, start+pr+qrs/4, start+pr+qrs/2, start+pr+3*qrs/4, start+pr+qrs, start+pr+qrs+qt/2-0.01])
			ecg.extend([-0.01, -0.08-0.02*random.random(), 0.8+0.2*random.random(), -0.35-0.05*random.random(), -0.05, 0])
			#qrs
			for i in range(1,10):
				t.append(start+pr+qrs+qt/2+qt/20*i)
				ecg.append(math.sqrt(max((qt/2)**2-(qt/20*i-qt/4)**2/((qt/4)**2)*((qt/2)**2),0)))
			#final
			t.append(start+pr+qrs+qt+0.01)
			start+=60/bpm
			ecg.append(0)

		if self.last_t == int(self.last_t):
			self.last_t=start
		else:
			t.append(start)
			ecg.append(0)
			self.last_t = int(self.last_t)+1

		return t, ecg

	def breathing_rate(bpm):
		return bpm/(random.random()*0.8+3.6)

	def sprint(self):
		bpm=self.heart_rate(2)
		self.stamina-=(((self.last_bpm/90)-1/1.112)*0.024+0.2261+0.15*((self.age_factor+1)/3.7)+0.05*abs(self.condition-1))/2
		speed = self.v_max*(1-math.e**(max(-self.tm/(0.7+self.condition*0.3+((self.age_factor+1)/3.7)-self.start_point),0)))
		self.last_speed = speed
		t, ecg = self.eletrocardiogram(bpm)
		return bpm, Player.breathing_rate(bpm), speed, t, ecg

	def run(self):
		bpm=self.heart_rate(1)
		self.stamina-=(((self.last_bpm/90)-1/1.112)*0.004+0.018+0.015*((self.age_factor+1)/3.7)+0.005*abs(self.condition-1))/2
		speed = random.random()*1+9.5
		self.last_speed = speed
		t, ecg = self.eletrocardiogram(bpm)
		return bpm, Player.breathing_rate(bpm), speed, t, ecg

	def walk(self):
		bpm=self.heart_rate(0)
		self.stamina-=(((self.last_bpm/90)-1/1.112)*0.0005+0.0055)/2
		speed = random.random()*0.5+3.2
		self.last_speed = speed
		t, ecg = self.eletrocardiogram(bpm)
		return bpm, Player.breathing_rate(bpm), speed, t, ecg

	def get_stamina(self):
		mycursor.execute(f"SELECT g.date FROM game g INNER JOIN stats_by_game s ON s.game_id = g.id WHERE s.id = {self.statsid} ")
		actual_day = mycursor.fetchone()[0]
		mycursor.execute(f"SELECT g.date FROM game g INNER JOIN stats_by_game s ON s.game_id = g.id INNER JOIN player p ON p.id = s.player_id WHERE p.id = {self.id} AND g.date < '{actual_day}' ORDER BY g.date DESC LIMIT 1")
		try:
			last_game = mycursor.fetchone()[0]
		except:
			last_game = date(1900,1,1)
		if last_game == date.today():
			n_days = 0.01
		else:
			n_days = (actual_day-last_game).days
		return (-math.e**(-n_days/(1.8+self.age_factor)+0.1)+1.1)*100

	def get_condition(self):
		mycursor.execute(f"SELECT SUM(s.minutes_played) FROM stats_by_game s INNER JOIN player p ON p.id = s.player_id INNER JOIN game g ON g.id = s.game_id WHERE p.id = {self.id} ORDER BY g.date DESC LIMIT 4")
		time_in_last_4_matches = mycursor.fetchone()[0]
		return -math.e**(-2*int(time_in_last_4_matches)/100)+1.00823

	def can_do(self, action, remaining_time, tm):
		if action:
			if self.stamina-1 < (remaining_time-tm)*0.00575+0.45715*tm:
				return False
			else:
				return True
		else:
			if self.stamina-1 < (remaining_time-tm)*0.00575+0.03*tm:
				return False
			else:
				return True

def main(start_time, statsid, live):
	player = Player(start_time, statsid, live)
	i=0
	init = time.time()
	if not live:
		bpm_list= []
		breathing_rate_list = []
		speed_list = []
		t_list = []
		ecg_list = []

	while i < (GAME_TIME-start_time):
		r=random.randrange(0, 100)
		tm1 = random.randrange(1, 8)
		tm2 = random.randrange(10, 25)
		if r < 7 and player.can_do(1, GAME_TIME-start_time-i, tm1):
			func = player.sprint
			tm=tm1
			player.tm = tm
			player.start_point = -math.log(-player.last_speed/player.v_max+1)
		elif r < 28 and player.can_do(0, GAME_TIME-start_time-i, tm2):
			func = player.run
			tm=tm2
		else:
			tm=random.randrange(15, 30)
			func = player.walk
		for e in range(tm):
			bpm, breathing_rate, speed, t, ecg = func()
			if live:
				player.send({"type":"live","id":player.id,"data":{"bpm":bpm,"breathing_rate":breathing_rate,"speed":speed,"ecg":ecg,"t":t, "time":i+e+start_time}})
				time.sleep(max(1-time.time()+init, 0))
				init = time.time()
			else:
				bpm_list.append(bpm)
				breathing_rate_list.append(breathing_rate)
				speed_list.append(speed)
				t_list.extend(t)
				ecg_list.extend(ecg)
		i+=tm

	if not live:
		t_list.append(player.last_t)
		ecg_list.append(0)
		player.send({"type":"stats","id":player.statsid,"data":{"bpm":bpm_list,"breathing_rate":breathing_rate_list,"speed":speed_list,"ecg":ecg_list,"t":t_list,"minutes_played":(GAME_TIME-start_time)//60}})
	else:
		player.send({"type":"minutes_played","id":player.statsid,"data":{"minutes_played":(GAME_TIME-start_time)//60}})
	player.send({"type":"rem_stamina","id":player.statsid,"data":{"stamina":player.stamina}})
	player.queue.close()

if __name__ == "__main__":

	parser = argparse.ArgumentParser()
	parser.add_argument("start_time", type=int, help="Start time of the game in seconds")
	parser.add_argument("statsid", type=str, help="StatsByGame Id")
	parser.add_argument("--live", action="store_true", default=False, help="If the game is live or not")
	args = parser.parse_args()

	main(args.start_time, args.statsid, args.live)
