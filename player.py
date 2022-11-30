from datetime import datetime
import math
import pika

def heart_rate():
	pass

def oxygen_saturation():
	pass

def speed():
	pass

def breathing_rate():
	pass

def get_stamina(actual_day, age):
	last_game = None #get last game from database
	n_days = (actual_day-last_game).days+(actual_day-last_game).seconds/86400
	age_factor = 131/21000*(age**2) - 6247/21000*age + 1209/350
	return -math.e**(-n_days/(1.8+age_factor)+0.1)+1.1*100

def get_condition(id):
	time_in_last_4_matches = None #get time_in_last_4_matches from database
	return -math.e**(-2*time_in_last_4_matches/100)+1.00823

def main(start_time, id, actual_day = datetime.now()):
	name = ("None").replace(' ', '_') #get name from database
	age = None #get age from database
	weight = None #get weight from database
	height = None #get height from database
	stamina = min(get_stamina(actual_day, age) + last_stamina, 100) #get last_stamina from database
	condition = get_condition(id)

	heart_hist=[]
	oxygen_hist=[]
	speed_hist=[]
	breathing_hist=[]

	connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
	channel = connection.channel()
	channel.queue_declare(queue='name')

	for i in range((2700-start_time)//5):
		for j in range(5):
			heart_hist.append(heart_rate())
			oxygen_hist.append(oxygen_saturation())
			speed_hist.append(speed())
			breathing_hist.append(breathing_rate())