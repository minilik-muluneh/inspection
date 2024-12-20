from django.contrib import admin

# Register your models here.
from .models import ExpenseForm

admin.site.register(ExpenseForm)