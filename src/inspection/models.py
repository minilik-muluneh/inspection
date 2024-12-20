from django.db import models
from django.core.exceptions import ValidationError
# Create your models here.

class ExpenseForm(models.Model):
    title=models.CharField(max_length=250,blank=False,validators=[str])
    amount=models.IntegerField(null=False,blank=False,validators=[int])
    catagory=models.CharField(max_length=200,null=False,blank=False,validators=[])

    def __str__(self) -> str:
        return self.title