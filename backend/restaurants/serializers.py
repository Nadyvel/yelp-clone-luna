from rest_framework import serializers
# from users.serializers import UserSerializer

from restaurants.models import Restaurant


class RestaurantSerializer (serializers.ModelSerializer):

    total_ratings = serializers.SerializerMethodField()  # searches for a function which is called get_total_ratings and executes it

    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ['id', 'user', 'total_ratings']

    def total_ratings(self, restaurant):
        return restaurant.rated_by.count()   # gives all the relations and the amount of ratings for the restaurant
