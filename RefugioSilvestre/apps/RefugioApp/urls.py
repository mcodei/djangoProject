from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('nosotros/', about, name="about"),
    path('equipo/', team, name='team'),
    path('eventos/', events, name='events'),
]