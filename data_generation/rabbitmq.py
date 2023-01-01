import pika
import json

class Queue:
	def __init__(self, host, port, user, password, queue_name, durable=True):
		self.host = host
		self.port = port
		self.user = user
		self.password = password
		self.queue_name = queue_name
		self.connection = None
		self.channel = None
		self.durable = durable

	def connect(self):
		credentials = pika.PlainCredentials(self.user, self.password)
		parameters = pika.ConnectionParameters(host=self.host, port=self.port, credentials=credentials)
		self.connection = pika.BlockingConnection(parameters)
		self.channel = self.connection.channel()
		self.channel.queue_declare(queue=self.queue_name, durable=self.durable) # durable=True makes the queue persistent

	def send(self, message):
		return self.channel.basic_publish(exchange='', routing_key=self.queue_name, body=message)

	def close(self):
		self.connection.close()
