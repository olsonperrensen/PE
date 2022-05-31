from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

#Create your models here.

class UserProfileManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):
        if not email:
            raise ValueError('User must have email address')

        email = self.normalize_email(email)    
        user = self.model(email=email, first_name=first_name, last_name=last_name)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def create_superuser(self, email, first_name, last_name, password):
        user= self.create_user(email, first_name, last_name, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class UserProfile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255,unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'
    def get_short_name(self):
        return f'{self.last_name}'
    def __str__(self):
        return self.email

class SearchTrain(models.Model):
    departure = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    date = models.DateField()
    def __str__(self):
        return f"{self.departure} - {self.destination}" 

class Train(models.Model):
    trip = models.ForeignKey(SearchTrain, related_name='trains' ,on_delete=models.CASCADE)
    train_type = models.CharField(max_length=10)
    departure_date = models.DateField()
    departure_time = models.TimeField()
    arrival_date = models.DateField()
    arrival_time = models.TimeField()
    def __str__(self):
        return f"{self.train_type} {self.trip.departure} ({self.departure_date}) - {self.trip.destination} ({self.arrival_date})"

class History(models.Model):
    customer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    departure = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    date = models.DateField()
    created_on = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.departure} - {self.destination}"    

class JourneyInfo(models.Model):
    train_type = models.ForeignKey(Train, related_name='journey', on_delete=models.CASCADE)
    station = models.CharField(max_length=100)
    distance = models.IntegerField(default=0)
    departure_date = models.DateField()
    departure_time = models.TimeField()
    arrival_time = models.TimeField()

    def __str__(self):
        return self.station

class Ticket(models.Model):
    customer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    train_type = models.ForeignKey(Train, on_delete=models.CASCADE)
    classes = models.CharField(max_length=10)
    price = models.IntegerField()

    def __str__(self):
        return f"{self.train_type.departure} - {self.train_type.destination}"
