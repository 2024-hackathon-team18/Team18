from django.db import models

class Question(models.Model):
    text = models.TextField("문제 지문")

class Choice(models.Model):
    question = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE)
    text = models.CharField("보기", max_length=255)

class Explanation(models.Model):
    question = models.OneToOneField(Question, related_name='explanation', on_delete=models.CASCADE)
    text = models.TextField("해설")
    is_correct = models.BooleanField("정답 여부", default=False)
