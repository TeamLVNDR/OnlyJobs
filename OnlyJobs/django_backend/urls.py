from django.urls import path
from . import views

urlpatterns = [
    path('test', views.home, name='home'),
]


#working

# from django.urls import path
# from .  import views

# urlpatterns = [
#     path('', views.home, name= 'home'),
# ]
