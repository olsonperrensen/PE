from pickle import PERSID
from rest_framework import permissions

class UpdateOwnProfile(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.id == request.user.id

class UpdateOwnHistory(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.customer.id == request.user.id