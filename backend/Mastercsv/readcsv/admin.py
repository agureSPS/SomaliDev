from django.contrib import admin
from .models import Readcsv

class ReadcsvAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Readcsv, ReadcsvAdmin)