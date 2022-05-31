from django.contrib import admin
from .models import History, UserProfile, Ticket, Train, JourneyInfo, SearchTrain
# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Ticket)
admin.site.register(History)
admin.site.register(Train)
admin.site.register(JourneyInfo)
admin.site.register(SearchTrain)
