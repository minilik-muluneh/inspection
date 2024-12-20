from django.shortcuts import render
from .forms import DisplayForm
# Create your views here.
def home(request):
    if request.method =='POST':
        form =DisplayForm(request.POST)
        if form.is_valid():
            form.save()
            print('saved succesfuly ')
    form =DisplayForm()
    ranges=[{'one':1},{'two':2},{'three':3},{'four':4},{'five':5},]
    return render(request,'inspection/index.html',{'form':form,'ranges':ranges})


def new(request):
    
    return render(request,'inspection/addnew.html',{})