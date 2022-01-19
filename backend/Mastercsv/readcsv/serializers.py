from rest_framework import serializers
from .models import Readcsv

class ReadcsvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Readcsv
        fields = ('id', 'title', 'description', 'completed')