from rest_framework import serializers
from users.serializers import UserSerializer

from restaurants.models import Restaurant, Comments


class RestaurantSerializer(serializers.ModelSerializer):
    restaurant = RestaurantSerializer()
    total_ratings = serializers.SerializerMethodField()  # searches for a function which is called get_total_ratings and executes it

    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ['restaurant']

    def get_total_ratings(self, post):
        return restaurant.rated_by.count()   # gives all the relations and the amount of ratings for the restaurant


class CommentsSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = Comments
        fields = '__all__'
        read_only_fields = ['user']