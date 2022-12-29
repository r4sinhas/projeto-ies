from datetime import datetime
import math
import random
import time
import scipy
import scipy.signal as sig
import json
import mysql.connector
from rabbitmq import Queue

mydb = mysql.connector.connect(
	host="localhost",
	user="admin",
	passwd="admin",
	database="ies_db"
)

mycursor = mydb.cursor()

class Player:

	def __init__(self, id, today=datetime.now(), live=False):
		self.id = id
		self.queue = Queue("localhost", 5672, "admin", "admin", "player_data")
		self.live_queue = None
		if live:
			self.live_queue = Queue("localhost", 5672, "admin", "admin", "live_data")
		self.queue.connect()
		mycursor.execute(f"SELECT age, height, last_stamina FROM player WHERE id={id};")
		result = mycursor.fetchone()
		self.age = result[0]
		self.height = result[1]
		last_stamina = result[2]
		self.stamina = min(Player.get_stamina(today) + last_stamina, 100)
		self.condition = Player.get_condition(id)
		self.age_factor = max(131/21000*(self.age**2) - 6247/21000*self.age + 1209/350, 0)
		self.bpm_history = []
		self.v_max = -4/7*self.height+957/7
		self.last_speed = 0

	def send(self, bpm, breathing, speed, t, ecg):
		m = {"id":self.id,"bpm":bpm,"breathing_rate":breathing,"speed":speed,"ecg":(t,ecg)}
		message = json.dumps(m)
		self.queue.send(message)
		if self.live_queue:
			self.live_queue.send(message)

	def heart_rate(self, run):
		if len(self.bpm_history)==0:
			init = 100
		else:
			init = self.bpm_history[-1]
		if run == 0:
			if init > 125:
				self.bpm_history.append(init-(4/3*self.stamina/100))
			else:
				self.bpm_history.append(max(init-1, 100))
		elif run == 1:
			if init > 145:
				self.bpm_history.append(init-1/3-1*((self.age_factor/1.8-1)/1.5))
			elif init < 125:
				self.bpm_history.append(init+0.21+self.stamina/20000+0.05*((self.age_factor/1.8-1)/1.5))
			else:
				self.bpm_history.append(max(init-(0.8*self.stamina/100), 135))
		else:
			self.bpm_history.append(max(20*math.e**(-2*init-1), 195))

	def eletrocardiogram(bpm):
		r = bpm//60 if bpm%60 < 0.5 else bpm//60+1 
		rr = [60/bpm for i in range(r)]
		fs = 500.0
		pqrst = sig.wavelets.daub(10)
		ecg = scipy.concatenate([sig.resample(pqrst, int(r*fs)) for r in rr])
		t = scipy.arange(len(ecg))/fs
		print(t, ecg)
		return (t, ecg)

	def breathing_rate(bpm):
		return bpm/(random.random()*0.8+3.6)

	def sprint(self, tm):
		start_point = -math.log(-self.last_speed/self.v_max+1)
		for _ in range(tm):
			self.stamina-=((self.bpm_history[-1]/90)-1/1.112)*0.024+0.2261+0.05*((self.age_factor/1.8-1)/1.5)+0.05*abs(self.condition-1)
			speed = self.v_max*(1-math.e**(-tm/(0.7+self.condition*0.3+(self.age_factor/1.8-1)/1.5)-start_point))
			self.last_speed = speed
			bpm=self.heart_rate(2)
			t, ecg = self.eletrocardiogram(bpm)
			breathing = self.breathing_rate(bpm)
			self.send(bpm, breathing, speed, t, ecg)

	def run(self, tm):
		for _ in range(tm):
			self.stamina-=((self.bpm_history[-1]/90)-1/1.112)*0.004+0.018+0.01*((self.age_factor/1.8-1)/1.5)+0.01*abs(self.condition-1)
			speed = random.random()*1+9.5
			self.last_speed = speed
			bpm=self.heart_rate(1)
			t, ecg = self.eletrocardiogram(bpm)
			breathing = self.breathing_rate(bpm)
			self.send(bpm, breathing, speed, t, ecg)

	def walk(self, tm):
		for _ in range(tm):
			self.stamina-=((self.bpm_history[-1]/90)-1/1.112)*0.0004+0.0038
			speed = random.random()*0.5+3.2
			self.last_speed = speed
			bpm=self.heart_rate(0)
			t, ecg = self.eletrocardiogram(bpm)
			breathing = self.breathing_rate(bpm)
			self.send(bpm, breathing, speed, t, ecg)

	def get_stamina(self, actual_day):
		mycursor.execute(f"SELECT g.date FROM game g WHERE EXISTS (SELECT 1 FROM team t WHERE t.id = ANY(g.teams) AND t.id = (SELECT p.team_id FROM player p WHERE p.id = {self.id})) ORDER BY g.date DESC LIMIT 1")
		last_game = mycursor.fetchone()[0]
		print(last_game, actual_day)
		exit()
		n_days = (actual_day-last_game).days+(actual_day-last_game).seconds/86400
		return (-math.e**(-n_days/(1.8+self.age_factor)+0.1)+1.1)*100

	def get_condition(self):
		mycursor.execute(f"SELECT SUM(s.minutes_played) FROM statsByGame s INNER JOIN game g ON g.id = s.game_id INNER JOIN player p ON p.id = s.player_id WHERE p.id = {self.id} ORDER BY g.date DESC LIMIT 4")
		time_in_last_4_matches = mycursor.fetchone()[0]
		print(time_in_last_4_matches)
		exit()
		return -math.e**(-2*time_in_last_4_matches/100)+1.00823

	def can_do(self, action, remaining_time, tm):
		if action:
			if self.stamina < remaining_time*0.004+0.35715*tm:
				return False
			else:
				return True
		else:
			if self.stamina < remaining_time*0.004-0.03*tm:
				return False
			else:
				return True

def main(start_time, id, actual_day = datetime.now(), live = False):
	player = Player(id, actual_day, live)
	i=0
	init = time.time()

	while i < (2700-start_time):
		r=random.randrange(0, 100)
		tm1 = random.randrange(2, 11)
		tm2 = random.randrange(3, 16)
		if r < 7 and player.can_do(1, 2700-start_time-i, tm1):
			player.sprint(tm1)
			tm=tm1
		elif r < 28 and player.can_do(0, 2700-start_time-i, tm2):
			player.run(tm2)
			tm=tm2
		else:
			tm=random.randrange(1, 11)
			player.walk(tm)
		i+=tm
		if live:
			time.sleep(max(tm-time.time()-init, 0))
			init = time.time()

	mycursor.execute(f"UPDATE player SET last_stamina = {player.stamina} WHERE id = {id};")
	player.queue.close()

if __name__ == '__main__':
	main(0, 1)