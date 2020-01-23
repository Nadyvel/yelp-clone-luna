from django.urls import path

from categories.views import ListAllCategories

urlpatterns = [

    path('list/', ListAllCategories.as_view()),

]
