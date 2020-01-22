from django.urls import path

from comments.views import GetCommentsOfUser, CreateComment, DeleteComment

urlpatterns = [

    path('<int:user_id>/', GetCommentsOfUser.as_view()),
    path('new/<int:review_id>/', CreateComment.as_view()),
    path('<int:review_id>/', DeleteComment.as_view()),

]
