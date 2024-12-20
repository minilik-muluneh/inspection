from django.test import TestCase,Client
from django.urls import reverse,resolve
from .models import ExpenseForm
from .views import home

# Create your tests here.
# class for testing the model of the inspaction app eperiance table

class Model_test(TestCase):
    def setUp(self):
        self.model_info=ExpenseForm.objects.create(
            title='minilik',
            amount=1000,
            catagory=200
        )
    def test_model(self):
        is_instance_of=isinstance(self.model_info,ExpenseForm)
        self.assertTrue(is_instance_of)
        
