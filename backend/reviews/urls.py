from django.urls import path

from reviews.views import CreateReview, GetReviewsOfUser, ListSpecificReviewById, DeleteUpdateReview, ToggleLike, \
    ReviewsLikedByUser, CommentedByUserReviews, ListReviewsForSingleRestaurant

urlpatterns = [

    path('new/<int:restaurant_id>/', CreateReview.as_view()),
    path('restaurant/<int:restaurant_id>/', ListReviewsForSingleRestaurant.as_view()),
    path('user/<int:user_id>/', GetReviewsOfUser.as_view()),
    path('<int:review_id>/', ListSpecificReviewById.as_view()),
    path('<int:review_id>/', DeleteUpdateReview.as_view()),
    path('like/<int:review_id>/', ToggleLike.as_view()),
    path('likes/', ReviewsLikedByUser.as_view()),
    path('comments/', CommentedByUserReviews.as_view()),
]
