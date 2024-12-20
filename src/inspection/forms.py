from django import forms
from .models import ExpenseForm

class DisplayForm(forms.ModelForm):
    class Meta:
        model=ExpenseForm
        fields=('title','amount','catagory')
        