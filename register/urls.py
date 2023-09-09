from django.urls import path, include
from . import views

urlpatterns = [
    #path('signup/', views.register, name='signup'),
    path('', views.register, name='signup'),
    path('signup/', views.signup),
]