from rest_framework import serializers

from .models import *

class studentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = student
        fields = '__all__'

class facultySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = faculty
        fields ='__all__'

class resultSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = result
        fields = '__all__'  
 

class classesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = classes
        fields = '__all__'  
                       

class subjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = subject
        fields = '__all__'  


class salarySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = salary
        fields = '__all__'  

class roomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = room
        fields = '__all__'  


class providerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = provider
        fields = '__all__'  

class enrolmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = enrolment
        fields = '__all__'  

class tutorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = tutor
        fields = '__all__'  
                                    

class schorshipSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = schorship
        fields = '__all__'  
                                     
'''class TestMigration_1Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TestMigration_1
        fields = '__all__'  '''
                                 