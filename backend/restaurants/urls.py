from django.urls import path

from restaurants.views import GetDeleteUpdateRestaurantView, GetRestaurantsOfUser, ListCreateRestaurant, \
    GetRestaurantsByCategory

urlpatterns = [

    path('api/restaurants/', ListCreateRestaurant.as_view()),
    path('api/restaurants/new/', ListCreateRestaurant.as_view()),
    path('/api/restaurants/<int:restaurant_id>/ ', GetDeleteUpdateRestaurantView.as_view()),
    path('/api/restaurants/user/<int:user_id>/', GetRestaurantsOfUser.as_view()),
    path('/api/restaurants/category/<int:category_id>/', GetRestaurantsByCategory.as_view()),
]
