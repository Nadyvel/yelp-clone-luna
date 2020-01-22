from django.db.models import Q
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer
from users.models import User
from users.serializers import UserSerializer


class SearchView(ListAPIView):

    def get(self, request, *args, **kwargs):
        self.serializer_class = RestaurantSerializer
        search_string = self.request.query_params.get('search')
        type_string = self.request.query_params.get('type')
        if type_string == 'restaurants':
            response = Restaurant.objects.filter(
                Q(name__icontains=search_string) |
                Q(city__icontains=search_string) |
                Q(category__icontains=search_string)
            )
            serializer = RestaurantSerializer(response, many=True)
            return Response(serializer.data)

        elif type_string == 'user':
            self.serializer_class = UserSerializer
            response = User.objects.filter(
                Q(username__icontains=search_string) |
                Q(first_name__icontains=search_string) |
                Q(last_name__icontains=search_string)
            )
            serializer = UserSerializer(response, many=True)
            return Response(serializer.data)
        return Response("Search type doesn't exist")
