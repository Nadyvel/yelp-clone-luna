import django_filters
from django.contrib.auth import get_user_model

from django.db.models import Q
from django.shortcuts import render


# Create your views here.
# creates post
from django_filters.rest_framework import filters
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, \
    GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurants.models import Restaurant
from restaurants.permissions import IsOwnerOfRestaurantOrReadOnly
from restaurants.serializers import RestaurantSerializer
from reviews.models import Review

User = get_user_model()


# create restaurant
class CreateRestaurant(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        restaurant = Restaurant(restaurant=self.request.restaurant, **serializer.validated_data)
        restaurant.save()


# gets a list of the restaurants and searches for a particular one by string
class ListRestaurants(ListAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def filter_queryset(self, queryset):
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(Q(name__icontains=search) |
                                       Q(country__icontains=search) |
                                       Q(street__icontains=search) |
                                       Q(city__icontains=search))
        return queryset


class CreateNewRestaurant(CreateAPIView):
    serializer_class = RestaurantSerializer
    permission_classes = [
        IsAuthenticated,
    ]

    def post(self, request):
        serializer = self.get_serializer(
            data=request.data,
            context=dict(request=request),
        )
        serializer.is_valid(raise_exception=True)
        restaurant = serializer.create(serializer.validated_data)
        return Response(RestaurantSerializer(restaurant).data, status.HTTP_201_CREATED)


# deletes or updates the restaurant by id
class GetDeleteUpdateRestaurant(RetrieveUpdateDestroyAPIView):
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
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        search_string = self.request.query_params.get('category')
        query_result = Restaurant.objects.filter(category__icontains=search_string).order_by('timestamp').reverse()
        return query_result


class ListFourBestRestaurants(GenericAPIView):
    queryset = Review.objects.filter(restaurant=1)
    # serializer_class = ReviewSerializerRating

    def get(self, request, **kwargs):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(serializer.data)
