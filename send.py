#!/usr/bin/env python
import pika
import json
from datetime import date

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost', port=5672, credentials=pika.PlainCredentials('admin', 'admin')))
channel = connection.channel()

channel.queue_declare(queue='player_data', durable=True)

message = json.dumps({'type': 'rem_stamina', 'id': 1, 'data': {'val':49.9,'day':date.today().strftime("%Y-%m-%d"), 'minutes_played':90}})
channel.basic_publish(exchange='', routing_key='player_data', body=message)
print(" [x] Sent 'Hello World!'")
connection.close()