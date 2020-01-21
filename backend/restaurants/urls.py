from django.urls import path

from restaurants.views import GetDeleteUpdateRestaurant, GetRestaurantsOfUser, \
    GetRestaurantsByCategory, ListRestaurants, CreateNewRestaurant

urlpatterns = [

    path('', ListRestaurants.as_view()),
    path('new/', CreateNewRestaurant.as_view()),
    path('<int:restaurant_id>/', GetDeleteUpdateRestaurant.as_view()),
    path('user/<int:user_id>/', GetRestaurantsOfUser.as_view()),
    path('category/<str:category>/', GetRestaurantsByCategory.as_view()),
]
