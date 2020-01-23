from rest_framework import serializers
# from users.serializers import UserSerializer

from restaurants.models import Restaurant


class RestaurantSerializer (serializers.ModelSerializer):

    total_ratings = serializers.SerializerMethodField()  # searches for a function which is called get_total_ratings and executes it

    def get_total_ratings(self, restaurant):
        return restaurant.reviews.count()   # gives all the relations and the amount of ratings for the restaurant

    class Meta:
        model = Restaurant
        fields = ['id', 'user', 'total_ratings', 'average_rating', 'price_level', 'opening_hours', 'city', 'street', 'category', 'image']
        read_only_fields = ['id', 'user', 'total_ratings']
