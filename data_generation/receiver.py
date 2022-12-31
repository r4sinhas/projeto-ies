import sys, os
import json
import requests

from rabbitmq import Queue

def post(url, data=None, json=None, headers=None):
	return requests.post(url, data=data, json=json, headers=headers)

def put(url, data=None, json=None, headers=None):
	return requests.put(url, data=data, json=json, headers=headers)

def callback(ch, method, properties, body):
	message = json.loads(body)
	process_message(message)

def recv(queue):
	queue.channel.basic_consume(queue=queue.queue_name, on_message_callback=callback, auto_ack=True)
	queue.channel.start_consuming()

def process_message(message):
	
		if message['type'] == 'stats':
				put(f'http://localhost:8080/api/v1/statsbygame/addstat/{message["id"]}', data=message['data'])
		elif message['type'] == 'minutes_played':
			put(f'http://localhost:8080/api/v1/player/minutesplayed/{message["id"]}', data=message['data'])
		elif message['type'] == 'rem_stamina':
			put(f'http://localhost:8080/api/v1/player/remstamina/{message["id"]}', data=message['data'])

def main():
	try:
		queue = Queue(host='localhost', port=5672, user='admin', password='admin', queue_name='player_data')
		queue.connect()
		recv(queue)
	except KeyboardInterrupt:
		print('Interrupted')
		try:
			sys.exit(0)
		except SystemExit:
			os._exit(0)

	queue.close()

if __name__ == '__main__':
	main()