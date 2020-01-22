from rest_framework.generics import ListAPIView

#
# class SearchResults(ListAPIView):
#     serializer_class = SearchSerializer
#     queryset = Restaurant.objects.all()
#
#     from django.db.models import Q
#     users = User.objects.filter(Q(first_name__contains=query) | Q(last_name__contains=query)
#     restaurants = Restaurant.objects.filter(restaurant_name__contains=query)
#     # reviews = Reviews.objects.filter(pizza_name__contains=query
#
#         return queryset