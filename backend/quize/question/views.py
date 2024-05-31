import fitz  # PyMuPDF
import openai
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.files.uploadedfile import UploadedFile

# OpenAI API 키 설정
openai.api_key = "YOUR_OPENAI_API_KEY"

def pdf_to_text(pdf_file):
    pdf_document = fitz.open(stream=pdf_file.read(), filetype="pdf")
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


class QuestionAPIView(APIView):
    def post(self, request):
        if 'pdf_file' not in request.FILES:
            return Response({"error": "No PDF file uploaded."}, status=status.HTTP_400_BAD_REQUEST)

        pdf_file = request.FILES['pdf_file']
        pdf_text = pdf_to_text(pdf_file)

        generated_question = gpt_generate_question(pdf_text)

        return Response({"generated_question": generated_question}, status=status.HTTP_200_OK)

    def get(self, request):
        return Response({"message": "GET method is not supported for this endpoint."}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

