from django.contrib import admin
from django.urls import path
from app1.views import home, about

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home',home,name='home'),
    path('about',about,name='about'),
]
