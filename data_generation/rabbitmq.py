import pika
import json

class Queue:
	def __init__(self, host, port, user, password, queue_name):
		self.host = host
		self.port = port
		self.user = user
		self.password = password
		self.queue_name = queue_name
		self.connection = None
		self.channel = None

	def connect(self):
		credentials = pika.PlainCredentials(self.user, self.password)
		parameters = pika.ConnectionParameters(host=self.host, port=self.port, credentials=credentials)
		self.connection = pika.BlockingConnection(parameters)
		self.channel = self.connection.channel()
		self.channel.queue_declare(queue=self.queue_name, durable=True) # durable=True makes the queue persistent

	def send(self, message):
		self.channel.basic_publish(exchange='', routing_key=self.queue_name, body=message)

	def close(self):
		self.connection.close()

	def recv(self):
		self.channel.basic_consume(queue=self.queue_name, on_message_callback=self.callback, auto_ack=True)
		self.channel.start_consuming()

	def callback(self, ch, method, properties, body):
		self.process_message(body)
		print(" [x] Received ")

	def process_message(self, body):
		message = json.loads(body)
		print(message)