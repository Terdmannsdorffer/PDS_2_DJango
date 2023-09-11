from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/get-quiz/', views.get_quiz, name='get-quiz'),
    path('check_answer/', views.check_answer, name='check_answer'),

]