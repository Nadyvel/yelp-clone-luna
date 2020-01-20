import django_filters
from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.
# creates post
from django_filters.rest_framework import filters
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated

from restaurants.models import Restaurant
from restaurants.permissions import IsOwnerOfRestaurantOrReadOnly
from restaurants.serializers import RestaurantSerializer


# create restaurant
class CreateRestaurant(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        restaurant = Restaurant(restaurant=self.request.restaurant, **serializer.validated_data)
        restaurant.save()


# gets a particular restaurant by id or lists them all
class ListCreateRestaurant(ListCreateAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['content', 'title']


# deletes or updates the restaurant by id
class GetDeleteUpdateRestaurantView(RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    lookup_url_kwarg = 'restaurant_id'
    permission_classes = [IsAuthenticated, IsOwnerOfRestaurantOrReadOnly]


# get all restaurants from one user     this code gets read, not executed. Only def method gets executed
class GetRestaurantsOfUser(ListAPIView):
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'user_id'
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        user = User.objects.get(id=user_id)
        restaurants = user.restaurants.all().order_by('timestamp').reverse()

        return restaurants


# get all restaurants filtered by category
class GetRestaurantsByCategory(ListAPIView):
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'restaurant_id'
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]

    def get_queryset(self):
        category_id = self.kwargs['restaurant_id']
        category = Restaurant.objects.get(id=category_id)
        restaurants = category.restaurants.all().order_by('timestamp').reverse()

        return restaurants