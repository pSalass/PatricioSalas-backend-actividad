from django.shortcuts import render


def property(request):
    return render(request, 'core/property.html')
