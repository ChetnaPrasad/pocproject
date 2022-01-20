from . models import student
from . models import faculty

class studentRouter:
    route_app_labels = {'student'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'student'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'student'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None




    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
            return db == 'student'
        return None    



  #####faculty database#####      

class facultyRouter:
    route_app_labels = {'faculty'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'faculty'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'faculty'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None




    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
            return db == 'faculty'
        return None    

####result###

class resultRouter:
    route_app_labels = {'result'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'result'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'result'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None




    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
            return db == 'result'
        return None


####class## 
class classesRouter:
    route_app_labels = {'class'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'class'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'class'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None




    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
            return db == 'class'
        return None 

#### subject ####

class subjectRouter:
    route_app_labels = {'subject'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'subject'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'subject'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
             return db == 'subject'
        return None          

 ####room###

class roomRouter:
    route_app_labels = {'room'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'room'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'room'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
             return db == 'room'
        return None   

######enrollment###

class enrolmentRouter:
    route_app_labels = {'enrolment'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'enrolment'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'enrolment'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
             return db == 'enrolment'
        return None

#####salary###

class salaryRouter:
    route_app_labels = {'salary'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'salary'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'salary'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
             return db == 'salary'
        return None                                                  

#####schorship###

class schorshipRouter:
    route_app_labels = {'schorship'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'schorship'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'schorship'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
             return db == 'schorship'
        return None 

#####provider#####

class providerRouter:
    route_app_labels = {'provider'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'provider'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'provider'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
             return db == 'provider'
        return None   


######tutor###

class tutorRouter:
    route_app_labels = {'tutor'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'tutor'
        return None

    def db_for_write(self, model, **hints): 
        if model._meta.app_label in self.route_app_labels:
            return 'tutor'
        return None 


    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
             return db == 'tutor'
        return None                                          