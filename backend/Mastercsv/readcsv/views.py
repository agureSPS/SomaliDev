from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ReadcsvSerializer
from .models import Readcsv

# Create your views here.

class ReadcsvView(viewsets.ModelViewSet):
    serializer_class = ReadcsvSerializer
    queryset = Readcsv.objects.all()