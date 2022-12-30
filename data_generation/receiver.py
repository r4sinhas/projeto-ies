import sys, os
import json
import requests

from rabbitmq import Queue

def put(url, data=None, json=None, headers=None):
	return requests.put(url, data=data, json=json, headers=headers)

def get(url, data=None, json=None, headers=None):
    try:
        response = requests.get(url, data=data, json=json, headers=headers)
        if response.status_code == 200:
            return response
        else:
            print(f'A solicitação HTTP falhou com o código de status {response.status_code}')
            return None
    except Exception as e:
        print(f'Ocorreu um erro ao fazer a solicitação HTTP: {e}')
        return None

def callback(ch, method, properties, body):
	message = json.loads(body)
	process_message(message)

def recv(queue):
	queue.channel.basic_consume(queue=queue.queue_name, on_message_callback=callback, auto_ack=True)
	queue.channel.start_consuming()

def process_message(message):
	if message['type'] == 'stats':
		put(f'http://localhost:8080/api/v1/statsbygame/addstat/{message["id"]}', data=message['data'])
	elif message['type'] == 'rem_stamina':
		if message['data']['minutes_played'] > 0:
			if message['data']['day'] > get(f'http://localhost:8080/api/v1/player/lastgame/{message["id"]}').text:
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