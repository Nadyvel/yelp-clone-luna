from django.urls import path

from backend.users.views import ListAllUsers, GetMyProfile, GetSpecificUserById

urlpatterns = [

    path('list/', ListAllUsers.as_view()),
    path('me/', GetMyProfile.as_view()),
    path('?search=<str:search_string>/', ListAllUsers.as_view()),
    path('<int:user_id>/', GetSpecificUserById.as_view()),
]

