from unittest.util import _MAX_LENGTH
from rest_framework import serializers
from . import models

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserProfile
        fields = ['id', 'email', 'first_name', 'last_name', 'password']
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {'input_type': 'password'}
            }
        }
        
    def create(self, validated_data):
        user = models.UserProfile.objects.create_user(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name = validated_data['last_name'],
            password = validated_data['password'],
        )    
        return user
    def update(self, instance, validated_data):
        """Handle updating user account"""
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)
 
        return super().update(instance, validated_data)

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.History
        fields = ['id', 'customer', 'departure', 'destination', 'Date', 'created_on']
        extra_kwargs = {
            'id':{'read_only':True},
            'customer':{'read_only':True},
        }

class JourneySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Journey
        fields = ['id', 'ticket', 'departure', 'distance', 'departure_date', 'departure_time', 'arrival_time']

class TicketSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Ticket
        fields = ['customer', 'departure', 'destination', 'Date', 'train_type', 'classes', 'price']
        extra_kwargs = {
            'id':{'read_only':True},
            'customer':{'read_only':True},
        }