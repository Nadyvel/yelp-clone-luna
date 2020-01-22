from rest_framework import permissions


class IsOwnerOfRestaurantOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.is_superuser:
            return True
        if request.method == 'GET':
            return True
        if request.user == obj.owner:
            return True
        else:
            return False


class IsSuperUserOrCannotCreateRestaurant(permissions.BasePermission):
    def has_permission(self, request, view):
        pass

    def has_object_permission(self, request, view, obj):
        pass