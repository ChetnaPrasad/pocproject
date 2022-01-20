from django.urls import include, path
from rest_framework import routers
from rest_framework import routers,views
from django.urls.resolvers import URLPattern
from .views import *
from rest_framework.routers import DefaultRouter
from django.conf.urls import url
from django.urls import path
from . import views




router = DefaultRouter()
router.register(r"students",studentViewSet)
router.register(r"faculty",facultyViewSet)
router.register(r"result",resultViewSet)
router.register(r"room",roomViewSet)
router.register(r"classes",classesViewSet)
router.register(r"enrolment",enrolmentViewSet)
router.register(r"tutor",tutorViewSet)
router.register(r"provider",providerViewSet)
router.register(r"subject",subjectViewSet)
router.register(r"salary",salaryViewSet)
router.register(r"schorship",schorshipViewSet)
#router.register(r"schorship",classesViewSet)
#router.register(r"TestMigration_1",classesViewSet)



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    #path('send',views.studentViewSet)
    #path('', RedirectView.as_view(url='send/')),
    #path('send',views.send),
    #path('homestudent',views.homestudent),
     

]