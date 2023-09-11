from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

from .models import *
import random

# Create your views here.


def home(request):
    return render(request, "home/home.html")

# {
#     'status' : True
#     'data':[
#         {},
#     ]
# }

def get_quiz(request):
    try:
        question_objs = list(Question.objects.all())
        
        data = []

        random.shuffle(question_objs)
        for question_obj in question_objs:
            data.append({
                'question': question_obj.question,
                'category': question_obj.category.category_name,
                'marks': question_obj.marks,
                'answers': question_obj.get_answers()
                
            })
        payload = {'status': True, 'data': data}
        return JsonResponse(payload)
    except Exception as e:
        print(e)
        return HttpResponse("Error")