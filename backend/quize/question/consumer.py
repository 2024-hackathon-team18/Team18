import json

from channels.generic.websocket import WebsocketConsumer


class Consumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.problem_count = 0
        self.current_problem = 0
        self.answers_received = 0

#     def disconnect(self, close_code):
#         pass

#     def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         message = text_data_json["message"]

#         message_type = text_data_json["type"]
#         message_content = text_data_json["message"]

#         # 타입에 따라 다른 로직을 구현
#         if message_type == "start":
#             self.
#         elif message_type == "problem":
#             self.create_problem(message_content)
#         elif message_type == "answer":
#             self.check_answer(message_content)
#         else:
#             self.send(text_data=json.dumps({"error": "Invalid message type"}))

#         self.send(text_data=json.dumps({"message": message}))