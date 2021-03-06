from django.urls import path

from restaurants.views import GetDeleteUpdateRestaurant, GetRestaurantsOfUser, \
    GetRestaurantsByCategory, ListRestaurants, CreateNewRestaurant, ListFourBestRestaurants

urlpatterns = [

    path('home/', ListFourBestRestaurants.as_view()),
    path('', ListRestaurants.as_view()),
    path('new/', CreateNewRestaurant.as_view()),
    path('<int:restaurant_id>/', GetDeleteUpdateRestaurant.as_view()),
    path('user/<int:user_id>/', GetRestaurantsOfUser.as_view()),
    path('category/', GetRestaurantsByCategory.as_view()),
]
