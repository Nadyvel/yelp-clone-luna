from django.contrib.auth import get_user_model

# Create your views here.
from rest_framework import filters

from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from backend.users.permissions import IsUserOrReadOnly
from users.serializers import UserSerializer

User = get_user_model()


# list all the users and search users
class ListAllUsers(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated, IsUserOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ['username']


# Get specific user profile
class GetSpecificUserById(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_url_kwarg = "user_id"


# gets logged in user's profile and updates public information
class GetMyProfile(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated, IsUserOrReadOnly]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        self.kwargs['pk'] = self.request.user.id
        return self.queryset

    def post(self, request):
        user = User.objects.filter(username=self.request.user)
        user.update(**request.data)
        return Response('Profile is updated')
