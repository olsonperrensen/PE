from email.policy import default
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('profile', views.UserProfileViewSet)
router.register('history', views.HistoryViewSet)
router.register('ticket', views.TicketViewSet)
router.register('journey', views.JourneyViewSet)
router.register('train', views.TrainViewSet)
router.register('home', views.SearchTrainViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('login', views.UserLoginApiView.as_view()),
]   