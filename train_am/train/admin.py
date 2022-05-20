from django.contrib import admin
from .models import History, UserProfile, Ticket, Journey
# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Ticket)
admin.site.register(Journey)
admin.site.register(History)