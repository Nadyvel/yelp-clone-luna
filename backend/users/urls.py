from django.urls import path

from users.views import ListAllUsers, GetMyProfile, GetSpecificUserById

urlpatterns = [

    path('list/', ListAllUsers.as_view()),
    path('me/', GetMyProfile.as_view()),
    path('', ListAllUsers.as_view()),
    path('<int:user_id>/', GetSpecificUserById.as_view()),
]

