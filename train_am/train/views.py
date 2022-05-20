from tokenize import Token
from urllib import response
from xmlrpc.client import ResponseError
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, filters, viewsets
from . import serializers, models, permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.permissions import IsAuthenticated



# Create your views here.
class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserProfileSerializer
    queryset = models.UserProfile.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('last_name', 'email',)
    def get_queryset(self):
        return self.queryset.filter(email=self.request.user)

class UserLoginApiView(ObtainAuthToken):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES

class HistoryViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.HistorySerializer
    queryset = models.History.objects.all()
    permission_classes = (
        permissions.UpdateOwnHistory,
        IsAuthenticated,
    )
    def get_queryset(self):
        return self.queryset.filter(customer=self.request.user).order_by('-id')
    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)
    def update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def partial_update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def destroy(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)

class JourneyViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.JourneySerializer
    queryset = models.Journey.objects.all()
    permission_classes = (
        IsAuthenticated,
    )
    def perform_create(self, serializer):
        serializer.save()
    def update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def partial_update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def destroy(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
        
class TicketViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.TicketSerializer
    queryset = models.Ticket.objects.all()
    permission_classes = (
        permissions.UpdateOwnHistory,
        IsAuthenticated,
    )
    def get_queryset(self):
        return self.queryset.filter(customer=self.request.user).order_by('-id')
    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)
    def update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def partial_update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def destroy(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)