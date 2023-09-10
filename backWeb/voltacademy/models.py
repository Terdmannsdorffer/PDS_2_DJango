from typing import Any
from django.db import models





class Tarea(models.Model):
    nombre = models.CharField(max_length=200)
    dificultad = models.CharField(max_length=2000)
    owner = models.CharField(max_length=200, default="admin")
    def __str__(self):
        return self.nombre

class Question(models.Model):
    question_text = models.CharField(max_length=2000)
    type_of_question = models.BooleanField(default=True) # True = multiple choice, False = calculation
    answer = models.CharField(max_length=200)
    number_of_variables = models.IntegerField(default=0)
    owner = models.CharField(max_length=200, default="admin")
    drawing = models.BooleanField(default=False)
    drawing_json = models.CharField(max_length=2000, default="{}")

    @property
    def type_of_question(self):
        return self.type_of_question
    
    def __str__(self):
        return self.question_text
    
    



class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    
    def __str__(self):
        return self.choice_text
    
