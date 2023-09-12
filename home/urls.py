from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/get-quiz/<str:category_name>/', views.get_quiz, name='get-quiz'),
    path('check_answer/', views.check_answer, name='check_answer'),
    path('api/get-math-question/', views.get_math_question, name='get_math_question'),

]