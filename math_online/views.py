from django.shortcuts import render



def index(request):
    return render(request,'math_online/index.html')

