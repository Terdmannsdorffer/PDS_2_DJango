from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
import json

from .models import *
import random

# Create your views here.


def home(request):
    return render(request, "home/home.html")

def get_quiz(request, category_name):
    try:
        # Assuming category_id is passed in the URL (e.g., api/get-quiz/1/)
        category = Category.objects.get(category_name=category_name)
        question_objs = list(Question.objects.filter(category=category))
        
        data = []

        questions_per_category = {}
        for question_obj in question_objs:
            category_name = question_obj.category.category_name
            if category_name in questions_per_category:
                questions_per_category[category_name] += 1
            else:
                questions_per_category[category_name] = 1

        random.shuffle(question_objs)
        for question_obj in question_objs:
            data.append({
                'question': question_obj.question,
                'category': question_obj.category.category_name,
                'difficulty': question_obj.difficulty,
                'marks': question_obj.marks,
                'answers': question_obj.get_answers(),
            })

        category_info = [{'category_name': category.category_name, 'num_questions_in_category': questions_per_category[category.category_name]}]
        
        merged_data = category_info + data
        payload = {'status': True, 'data': merged_data}
        return JsonResponse(payload)
    except Category.DoesNotExist:
        return HttpResponse("Category not found", status=404)
    except Exception as e:
        print(e)
        return HttpResponse("Error")

    


def check_answer(request):
    if request.method == 'POST':
        try:
            data = request.POST.get('data')  

            
            data = json.loads(data)
            question = data.get('question')
            selected_answer_id = data.get('answer')

            
            question = Question.objects.get(pk=question)
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