from rest_framework.generics import GenericAPIView
from rest_framework.response import Response


class ListAllCategories(GenericAPIView):
    permission_classes = []

    def get(self, request, *args, **kwargs):
        return Response(['Asian', 'Mexican', 'Swiss', 'Italian'])

