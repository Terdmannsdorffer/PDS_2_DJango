from django.db import models
import uuid
import random
# Create your models here.

class BaseModel(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract=True

class Category(BaseModel):   
    category_name = models.CharField(max_length=200)

    def __str__(self):
        return self.category_name
    

    
class Question(BaseModel):
    DIFFICULTY_CHOICES = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]

    question = models.CharField(max_length=1000)
    category = models.ForeignKey(Category, related_name='category', on_delete=models.CASCADE)
    marks = models.IntegerField(default=0)
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES, default='medium')

    def __str__(self):
        return self.question
    
    def get_answers(self):
        answer_objs = list(Answer.objects.filter(question=self))
        random.shuffle(answer_objs)
        data = []
        for answer_obj in answer_objs:
            data.append({
                'answer': answer_obj.answer,
                'is_correct': answer_obj.is_correct,
                'explanation': answer_obj.explanation,
            })
        return data


class Answer(BaseModel):
    question = models.ForeignKey(Question,related_name='question_answer', on_delete=models.CASCADE)
    answer = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)
    explanation = models.CharField(max_length=1000, blank=True, null=True)

    def __str__(self):
        return self.answer
    


class MathQuestion(BaseModel):
    question = models.CharField(max_length=200)
    answer = models.FloatField()

    def __str__(self):
        return self.question
    
    