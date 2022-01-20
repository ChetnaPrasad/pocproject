import logging
from django.http import HttpResponse,HttpResponseRedirect
from typing import Dict
from rest_framework import request, viewsets
from django.http import HttpResponse
from web.db_router import studentRouter
from .serializers import *
from .models import *
from types import GetSetDescriptorType
from django . shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
import json

import logging
#logging.basicConfig(filename='example.log', encoding='utf-8', level=logging.INFO)
# logger=logging.getLogger('django')
logger=logging.getLogger('root')
# from logging import *
# logger = logging.getLogger(__name__)


class studentViewSet(viewsets.ModelViewSet):
    logging.info("In StudentSet")
    logging.critical("In StudentSet")
    # queryset = student.objects.all()
    # queryset = student.objects.filter(Name='radhika')
    # queryset = student.objects.all()
    # queryset = student.objects.exclude(Name='radhika')
    # queryset = student.objects.order_by('Name')#assending order
    # queryset = student.objects.order_by('-Name')#disassending
    # queryset = student.objects.order_by('?')#randomly
    # queryset = student.objects.order_by('Branch').reverse()[0:3]
    #queryset = student.objects.values('Name')
    # '''qs1=student.objects.values_list('Name','Lastname')
    # qs2=result.objects.values_list('stu_name')
    # queryset = qs2.union(qs1, all=True)
    # print(queryset)'''
    # queryset = student.objects.all()'''
    # '''qs1=student.objects.values_list('Name',named=True)
    # print('qs1: ',qs1)
    # qs2=faculty.objects.values_list('Name',named=True)
    # print('qs2 : ',qs2)
    # queryset = qs2.excludes(qs1)
    # print('queryset: ' ,queryset)
    # qs1=student.objects.values_list('Name',named=True)
    # qs2=faculty.objects.values_list('Name',named=True)
    # queryset = qs2.difference(qs1)'''
    #queryset = student.objects.raw('SELECT * FROM student INNER JOIN faculty on Name=Name' )
   # queryset = student.objects.all()
    
    

    queryset = student.objects.all()
    serializer_class = studentSerializer

    # '''def send(request):
    #     Name= request.POST['Name']
    #     Lastname = request.POST['Lastname']
    #     Branch = request.POST['Branch']
    #     queryset=open("student.txt","r+")
    #     queryset.read()
    #     queryset.write(Name+"-"+Lastname+"-"+Branch+"\n")
    #     student(Name=Name,Lastname=Lastname,Branch=Branch).save()
    #     return queryset.student_get.all()  ''' 
    #print(file.write("hello"))

    
    # '''name = "aman soni"
    # print("write file")
    # f = open("myfile.txt", "r+")
    # print(f.write("name :"+name))'''
    # print("Reading file: ")
    # print(f.read())
    # print(data.read())
    # data.write("hello")
    # print(data.write())
    #queryset = student.objects.all()
    


    #Name = request.POST['Name']
    #Lastname = request.POST['Lastname']
    #Branch = request.POST['Branch']
    

    
        



class facultyViewSet(viewsets.ModelViewSet):
    # queryset = faculty.objects.filter(Name='chetna')
    # queryset = faculty.objects.exclude(Name='chetna')
    # queryset = faculty.objects.order_by('Name')
    # queryset = faculty.objects.order_by('-Name')
    # queryset = faculty.objects.order_by('?')
    # queryset = faculty.objects.order_by('subject').reverse()[0:3]
    #queryset = faculty.objects.all()
    '''print("queryset: ", faculty.objects.all())
     tempData = dict()
     for obj in faculty.objects.all().values('Name'):
         print(obj)
          tempData.append(obj)
    queryset = faculty.objects.all().values('Name')
    print("queryset: ", faculty.objects.all().values('Name'))'''
    '''queryset = faculty.objects.all().values("Name")
    for q in queryset:
        print(type(q))
    print(queryset)'''
    qs1=faculty.objects.values_list('Name')
    qs2=student.objects.values_list('Lastname')
    # queryset = qs2.union(qs1)
    # print(queryset)
    '''qs1=faculty.objects.values_list('Name')
    qs2=student.objects.values_list('Lastname')
    queryset = qs2.intersection(qs1)
    print(queryset)'''
    #print(queryset)
    #queryset = faculty.objects.raw("SELECT * FROM student WhERE Name=chetna" )
    queryset = faculty.objects.all()
    serializer_class = facultySerializer
 # loggers

class resultViewSet(viewsets.ModelViewSet):
    #queryset = result.objects.filter(stu_name="rakhi")
    #queryset = result.objects.exclude(stu_name="rakhi")
    #queryset = result.objects.order_by("stu_name")
    #queryset = result.objects.order_by("-stu_name")
    #queryset = result.objects.order_by("?")
    #queryset = result.objects.order_by("stu_name").reverse()[0:2]
    queryset = result.objects.all()
    serializer_class = resultSerializer


class classesViewSet(viewsets.ModelViewSet):
    #queryset = classes.objects.filter(branch="computer science")
    #queryset = classes.objects.exclude(branch="computer science")
    #queryset = classes.objects.order_by('branch')
    #queryset = classes.objects.order_by('-branch')
    #queryset = classes.objects.order_by('?')
    #queryset = classes.objects.order_by('branch').reverse()[2:5]
    queryset = classes.objects.all()
    serializer_class = classesSerializer


class subjectViewSet(viewsets.ModelViewSet):
    #queryset = subject.objects.filter(sub="cloud computing")
    #queryset = subject.objects.exclude(sub="cloud computing")
    #queryset = subject.objects.order_by('sub')
    #queryset = subject.objects.order_by('-sub')
    #queryset = subject.objects.order_by('?')
    #queryset = subject.objects.order_by('sub').reverse()[1:3]
    queryset = subject.objects.all()
    serializer_class = subjectSerializer


class salaryViewSet(viewsets.ModelViewSet):
    #queryset = salary.objects.filter(details="programing")
    #queryset = salary.objects.exclude(details="programing")
    #queryset = salary.objects.order_by("details")
    #queryset = salary.objects.order_by("-details")
    #queryset = salary.objects.order_by("?")
    #queryset = salary.objects.order_by("details").reverse()[0:5]
    queryset = salary.objects.all()
    serializer_class = salarySerializer


class roomViewSet(viewsets.ModelViewSet):
    #queryset = room.objects.filter(room_seat="av")
    #queryset = room.objects.exclude(room_seat="av")
    #queryset = room.objects.order_by("room_seat")
    #queryset = room.objects.order_by("-room_seat")
    #queryset = room.objects.order_by("?")
    #queryset = room.objects.order_by("room_seat").reverse()[0:3]
    queryset = room.objects.all()
    serializer_class = roomSerializer


class providerViewSet(viewsets.ModelViewSet):
    #queryset = provider.objects.filter(provider_name="rajveer")
    #queryset = provider.objects.exclude(provider_name="rajveer")
    #queryset = provider.objects.order_by('provider_name')
    #queryset = provider.objects.order_by("-provider_name")
    #queryset = provider.objects.order_by("?")
    #queryset = provider.objects.order_by("provider_name").reverse()[0:3]
    queryset = provider.objects.all()
    serializer_class = providerSerializer


class enrolmentViewSet(viewsets.ModelViewSet):
    #queryset = enrolment.objects.filter(student_name="Megha songara")
    #queryset = enrolment.objects.exclude(student_name="Megha songara")
    #queryset = enrolment.objects.order_by('student_name')
    #queryset = enrolment.objects.order_by("-student_name")
    #queryset = enrolment.objects.order_by("?")
    #queryset = enrolment.objects.order_by("student_name").reverse()[0:3]
    queryset = enrolment.objects.all()
    serializer_class = enrolmentSerializer


class tutorViewSet(viewsets.ModelViewSet):
    #queryset = tutor.objects.filter(tutor_name="Mandakini")
    #queryset = tutor.objects.exclude(tutor_name="Mandakini")
    #queryset = tutor.objects.order_by('tutor_name')
    #queryset = tutor.objects.order_by("-tutor_name")
    #queryset = tutor.objects.order_by("?")
    #queryset = tutor.objects.order_by("tutor_name").reverse()[0:3]
    queryset = tutor.objects.all()
    serializer_class = tutorSerializer


class schorshipViewSet(viewsets.ModelViewSet):
    #queryset = schorship.objects.filter(branch="electrical")
    #queryset = schorship.objects.exclude(branch="electrical")
    #queryset = schorship.objects.order_by('branch')
    #queryset = schorship.objects.order_by("-branch")
    #queryset = schorship.objects.order_by("?")
    #queryset = schorship.objects.order_by("branch").reverse()[0:3]
    queryset = schorship.objects.all()
    serializer_class = schorshipSerializer


'''class student(APIView):

	def get(self,request):
		student1 = student.objects.all()
		serializer= studentSerializer(student1,many = True)
		return Response(serializer.data)
'''
