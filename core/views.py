from django.shortcuts import render

def home(request):
    return render(request, 'core/home.html')

def about(request): 
    return render(request, 'about/about.html')

def contact(request):
    return render(request, 'contact/contact.html')

def listings(request):
    return render(request, 'listings/listings.html')

def property(request):
    return render(request, 'property/property_detail.html')