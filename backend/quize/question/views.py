from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .consumer import Consumer
import json
import fitz
import openai
import re
from .models import Question, Choice
from dotenv import load_dotenv
import os

load_dotenv(verbose=True)
# OpenAI API 키 설정
openai.api_key = os.getenv('OPEN_AI_API_KEY')
# Create your views here.
text = None
problem = None

class QuestonAPIView(APIView):
    def post(self, request):
        problem_num = request.data.get("num")
        path = "/Users/SAMSUNG/Downloads/강의록8-병행성-세마포어_데드락 (1).pdf"
        text = pdf_to_text(path)
        problem = gpt_generate_question(text)
        question, choices = extract_question_choices(problem)

        # question = Question.objects.create(text=question)
    
        # Choice 저장
        # for choice_text in choices:
        #     Choice.objects.create(question=question, text=choice_text)

        return Response({"question": question,
                         "choices": choices}, status=status.HTTP_200_OK)

    def get(self, request):
        pass

class AnswerAPIView(APIView):
    def post(self, request):
        user_answer = request.data.get("answer")
        gpt_answer = gpt_get_answer(text, problem)
        # is_correct = (choice_text == correct_answer)
        # explantion = gpt_get_explanation(text, problem, gpt_answer)
        if user_answer.strip().lower() == gpt_answer.strip().lower():
            return Response({"message": "정답입니다"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "오답입니다"}, status=status.HTTP_200_OK)



def pdf_to_text(pdf_path):
    # PDF 파일 열기
    pdf_document = fitz.open(pdf_path)
    text = ""

    # 각 페이지에 대해 텍스트 추출
    for page_num in range(pdf_document.page_count):
        page = pdf_document[page_num]
        text += page.get_text()
    
    return text

def gpt_generate_question(text):
    prompt = f"다음 텍스트를 바탕으로 중간고사 대비 시험 문제를 4지선다 형식으로 1문제 생성해 주세요 답은 포함하지 마세요:\n\n{text}\n\n문제:"
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response['choices'][0]['message']['content'].strip()

def extract_question_choices(generated_question):
    pattern = r"(.*)\n\s*A\.\s*(.*)\n\s*B\.\s*(.*)\n\s*C\.\s*(.*)\n\s*D\.\s*(.*)"
    match = re.match(pattern, generated_question, re.DOTALL)
    if match:
        question = match.group(1).strip()
        choices = [
            match.group(2).strip(),
            match.group(3).strip(),
            match.group(4).strip(),
            match.group(5).strip()
        ]
        return question, choices
    else:
        raise ValueError("Generated question format is incorrect.")
    
def gpt_get_answer(text, question):
    prompt = f"다음 텍스트를 바탕으로 생성된 시험 문제에 대한 정답을 제공해 주세요:\n\n{text}\n\n문제:\n{question}\n\n정답:"
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response['choices'][0]['message']['content'].strip()

def gpt_get_explanation(text, question, answer):
    prompt = f"다음 텍스트를 바탕으로 문제에 대한 해설과 관련된 이론을 자세하게 정리해주세요:\n\n{text}\n\n문제:\n{question}\n\n정답:\n{answer}\n\n해설:"
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response['choices'][0]['message']['content'].strip()