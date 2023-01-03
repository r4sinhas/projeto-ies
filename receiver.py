import sys, os
import json
import requests
import argparse

from multiprocessing.dummy import Pool

from rabbitmq import Queue

pool = Pool(10)

def post(url, data=None, json=None, headers=None):
	pool.apply_async(requests.post, [url], {'data':data, 'json':json, 'headers':headers})

def put(url, data=None, json=None, headers=None):
	pool.apply_async(requests.put, [url], {'data':data, 'json':json, 'headers':headers})

def callback_True(ch, method, properties, body):
	print(process_message(json.loads(body)))

def callback_False(ch, method, properties, body):
	print(process_message(json.loads(body)))
	ch.basic_ack(delivery_tag=method.delivery_tag)

def recv(queue: Queue, live=False):
	if live:
		queue.channel.basic_consume(queue=queue.queue_name, on_message_callback=callback_True, auto_ack=True)
		queue.channel.start_consuming()
	else:
		queue.channel.basic_consume(queue=queue.queue_name, on_message_callback=callback_False, auto_ack=False)
		queue.channel.start_consuming()

def process_message(message):

		if message['type'] == 'stats':
			try:
				put(f'http://localhost:8080/api/v1/statsbygame/addstats/{message["id"]}', data=message['data'])
				return "Stats sent"
			except Exception as e:
				return e
		elif message['type'] == 'minutes_played':
			try:
				put(f'http://localhost:8080/api/v1/statsbygame/minutesplayed/{message["id"]}', data=message['data'])
				return "Minutes played sent"
			except Exception as e:
				return e
		elif message['type'] == 'rem_stamina':
			try:
				put(f'http://localhost:8080/api/v1/player/remstamina/{message["id"]}', data=message['data'])
				return "Stamina sent"
			except Exception as e:
				print(e)

		elif message['type'] == 'live':
			try:
				put(f'http://localhost:8080/api/v1/statsbygame/live/addstats/{message["id"]}', data=message['data'])
				return "Stats Live sent"
			except Exception as e:
				print(e)
		else:
			return "Unknown message type"

def main(live):
	try:
		if live:
			queue = Queue(host='localhost', port=5672, user='admin', password='admin', queue_name='live_data', durable=False)
		else:
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

	parser = argparse.ArgumentParser()
	parser.add_argument('--live', action='store_true', default=False)
	args = parser.parse_args()

	main(args.live)