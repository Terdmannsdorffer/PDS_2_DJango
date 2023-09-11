from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
import json

from .models import *
import random

# Create your views here.


def home(request):
    return render(request, "home/home.html")

def get_quiz(request):
    try:
        question_objs = list(Question.objects.all())
        
        data = []

        random.shuffle(question_objs)
        for question_obj in question_objs:
            data.append({
                'question': question_obj.question,
                'category': question_obj.category.category_name,
                'difficulty': question_obj.difficulty,
                'marks': question_obj.marks,
                'answers': question_obj.get_answers(),
                
                
            })
        payload = {'status': True, 'data': data}
        return JsonResponse(payload)
    except Exception as e:
        print(e)
        return HttpResponse("Error")
    


def check_answer(request):
    if request.method == 'POST':
        try:
            data = request.POST.get('data')  

            
            data = json.loads(data)
            question_id = data.get('question')
            selected_answer_id = data.get('answer')

            
            question = Question.objects.get(pk=question_id)
            correct_answer = Answer.objects.get(question=question, is_correct=True)

            
            is_correct = selected_answer_id == correct_answer.pk

            response_data = {
                'is_correct': is_correct,
            }

            return JsonResponse(response_data)
        except Exception as e:
            print(e)
            return JsonResponse({'is_correct': False, 'error': str(e)})

    return JsonResponse({'is_correct': False, 'error': 'Invalid request method'})