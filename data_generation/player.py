from datetime import date
import math
import random
import time
import numpy
import scipy.signal as sig
import json
import mysql.connector
from rabbitmq import Queue
import argparse

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

	def __init__(self, id, today, live=False):
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
		self.age_factor = max(131/21000*(self.age**2) - 6247/21000*self.age + 1209/350, 0)
		self.stamina = min(self.get_stamina(today) + last_stamina, 100)
		self.condition = min(self.get_condition(), 1)
		self.v_max = -4/7*self.height+957/7
		self.last_speed = 0
		self.last_bpm = 100
		self.day = today

	def send(self, bpm, breathing, speed, t, ecg):
		m = {"type":"stats","id":self.id,"data":{"bpm":bpm,"breathing_rate":breathing,"speed":speed,"ecg":[t,ecg],"day":self.day.strftime("%Y-%m-%d")}}
		message = json.dumps(m)
		self.queue.send(message)
		if self.live_queue:
			self.live_queue.send(message)

	def heart_rate(self, run):
		init = self.last_bpm
		if run == 0:
			if init > 125:
				self.last_bpm = init-(4/3*self.stamina/100)
			else:
				self.last_bpm = max(init-1, 100)
		elif run == 1:
			if init > 145:
				self.last_bpm = init-1/3-1*((self.age_factor/1.8-1)/1.5)
			elif init < 125:
				self.last_bpm = init+0.21+self.stamina/20000+0.05*((self.age_factor/1.8-1)/1.5)
			else:
				self.last_bpm = max(init-(0.8*self.stamina/100), 135)
		else:
			self.last_bpm = max(20*math.e**(-2*init-1), 195)
		return self.last_bpm

	def eletrocardiogram(bpm):
		r = int(bpm//60 if bpm%60 < 0.5 else bpm//60+1)
		rr = [60/bpm for _ in range(r)]
		fs = 500.0
		ecg = list(numpy.concatenate([sig.resample(sig.daub(10), int(r*fs)) for r in rr]))
		return (list(numpy.arange(len(ecg))/fs), ecg)

	def breathing_rate(bpm):
		return bpm/(random.random()*0.8+3.6)

	def sprint(self, tm):
		start_point = -math.log(-self.last_speed/self.v_max+1)
		for _ in range(tm):
			bpm=self.heart_rate(2)
			self.stamina-=(((self.last_bpm/90)-1/1.112)*0.024+0.2261+0.15*(self.age_factor/2.7)+0.05*abs(self.condition-1))/2
			speed = self.v_max*(1-math.e**(-tm/(0.7+self.condition*0.3+(self.age_factor/2.7)-start_point)))
			self.last_speed = speed
			t, ecg = Player.eletrocardiogram(bpm)
			self.send(bpm, Player.breathing_rate(bpm), speed, t, ecg)

	def run(self, tm):
		for _ in range(tm):
			bpm=self.heart_rate(1)
			self.stamina-=(((self.last_bpm/90)-1/1.112)*0.004+0.018+0.015*(self.age_factor/2.7)+0.005*abs(self.condition-1))/2
			speed = random.random()*1+9.5
			self.last_speed = speed
			t, ecg = Player.eletrocardiogram(bpm)
			self.send(bpm, Player.breathing_rate(bpm), speed, t, ecg)

	def walk(self, tm):
		for _ in range(tm):
			bpm=self.heart_rate(0)
			self.stamina-=(((self.last_bpm/90)-1/1.112)*0.0005+0.0055)/2
			speed = random.random()*0.5+3.2
			self.last_speed = speed
			t, ecg = Player.eletrocardiogram(bpm)
			self.send(bpm, Player.breathing_rate(bpm), speed, t, ecg)

	def get_stamina(self, actual_day):
		mycursor.execute(f"SELECT g.date FROM game g INNER JOIN stats_by_game s ON s.game_id = g.id INNER JOIN player p ON p.id = s.player_id WHERE p.id = {self.id} ORDER BY g.date DESC LIMIT 1")
		last_game = mycursor.fetchone()[0]
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
			if self.stamina-1 < remaining_time*0.00575+0.45715*tm:
				return False
			else:
				return True
		else:
			if self.stamina-1 < remaining_time*0.00575-0.03*tm:
				return False
			else:
				return True

def main(start_time, id, live, actual_day = date.today()):
	player = Player(id, actual_day, live)
	i=0
	init = time.time()

	while i < (GAME_TIME-start_time):
		r=random.randrange(0, 100)
		tm1 = random.randrange(1, 11)
		tm2 = random.randrange(3, 16)
		if r < 7 and player.can_do(1, GAME_TIME-start_time-i, tm1):
			player.sprint(tm1)
			tm=tm1
		elif r < 28 and player.can_do(0, GAME_TIME-start_time-i, tm2):
			player.run(tm2)
			tm=tm2
		else:
			tm=random.randrange(1, 11)
			player.walk(tm)
		i+=tm
		if live:
			time.sleep(max(tm-time.time()-init, 0))
			init = time.time()

	player.queue.send(json.dumps({"type":"rem_stamina","id":id,"data":{"val":player.stamina,"day":actual_day.strftime("%Y-%m-%d"), "minutes_played":(GAME_TIME-start_time)//60}}))
	player.queue.close()

if __name__ == "__main__":

	parser = argparse.ArgumentParser()
	parser.add_argument("start_time", type=int, help="Start time of the game in seconds")
	parser.add_argument("id", type=int, help="Player id")
	parser.add_argument("--live", action="store_true", help="Live mode")
	parser.add_argument("--day", type=str, help="Day (YYYY-MM-DD)")
	args = parser.parse_args()

	if args.day:
		day = date.fromisoformat(args.day)
		main(args.start_time, args.id, args.live, day)
	else:
		main(args.start_time, args.id, args.live)
