from django.shortcuts import render


def listings(request):
    return render(request, 'core/listings.html')
