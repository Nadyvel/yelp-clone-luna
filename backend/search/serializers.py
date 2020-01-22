from rest_framework import serializers

from restaurants.models import Restaurant


class SearchSerializer (serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = '__all__'
