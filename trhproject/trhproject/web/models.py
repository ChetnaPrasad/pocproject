from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class student(models.Model):
    #ID = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=50)
    Lastname = models.CharField(max_length=50)
    Branch = models.CharField(max_length=50)

    class Meta:
        db_table = "student_name"

    def __str__(self):
        return self.Name


class faculty(models.Model):
    #ID = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=50)
    subject = models.CharField(max_length=200)

    def __str__(self):
        return self.Name


class result(models.Model):
    #ID = models.IntegerField(primary_key=True)
    stu_name = models.CharField(max_length=50)
    score = models.CharField(max_length=200)

    def __str__(self):
        return self.stu_name


class classes(models.Model):
    # ID = models.IntegerField(primary_key=True)
    branch = models.CharField(max_length=100)
    semester = models.CharField(max_length=56)

    def __str__(self):
        return self.branch


class subject(models.Model):
    # ID = models.IntegerField(primary_key=True, default="12")
    sub = models.CharField(max_length=200)
    book = models.CharField(max_length=200)

    def __str__(self):
        return self.sub


class salary(models.Model):
    # ID = models.IntegerField(primary_key=True,  default="60")
    details = models.CharField(max_length=900)
    salary = models.CharField(max_length=1000)

    def __str__(self):
        return self.details


class room(models.Model):
    room_seat = models.CharField(max_length=200)
    room_no = models.CharField(max_length=200)

    def __str__(self):
        return self.room_seat


class provider(models.Model):
    # ID = models.IntegerField(max_length=10, primary_key=True)
    provider_name = models.CharField(max_length=200)

    def __str__(self):
        return self.provider_name


class enrolment(models.Model):
    # ID = models.IntegerField(max_length=10, primary_key=True)
    student_name = models.CharField(max_length=200)
    classes = models.CharField(max_length=200)

    def __str__(self):
        return self.student_name


class tutor(models.Model):
    # ID = models.IntegerField(max_length=10, primary_key=True)
    tutor_name = models.CharField(max_length=200)
    rank = models.CharField(max_length=200)

    def __str__(self):
        return self.tutor_name


class schorship(models.Model):
    # ID = models.IntegerField(primary_key=True, default="70")
    schorler_name = models.CharField(max_length=200)
    branch = models.CharField(max_length=200)

    def __str__(self):
        return self.schorler_name



'''class TestMigration_1(models.Model):
    # ID = models.IntegerField(primary_key=True, default="70")
    schorler_name = models.CharField(max_length=200)
    branch = models.CharField(max_length=200)

    class Meta:
        db_table = 'test_migration_1'

    def __str__(self):
        return self.schorler_name     '''
