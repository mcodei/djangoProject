from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'pages/index.html')

def about(request):
    return render(request, 'pages/about.html')

def team(request):
    return render(request, 'pages/our_team.html')

def events(request):
    return render(request, 'pages/events.html')