from django.urls import path
from .views import (
    QuestonAPIView,
    AnswerAPIView
)
# from . import views
# from summary import views

urlpatterns = [
    path('', QuestonAPIView.as_view()),
    path('/answer', AnswerAPIView.as_view()),
]