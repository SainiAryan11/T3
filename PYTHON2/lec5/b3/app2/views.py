from django.shortcuts import render

# Create your views here.

def contact(request):
    return render(request,'contact.html')

def hello(request):
    name = 'aryan'
    number = 100
    return render(request,'base.html', {'n': name, 'fb': number})

