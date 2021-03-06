
from rest_framework import filters

# Create your views here.

from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, \
    GenericAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from reviews.models import Review
from reviews.permissions import IsOwnerOfReviewOrReadOnly

from reviews.serializers import ReviewSerializer
from users.models import User


# creates review
class CreateReview(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        review = Review(user=self.request.user, **serializer.validated_data)
        review.save()


# lists reviews for a single restaurant
class ListReviewsForSingleRestaurant(ListAPIView):
    permission_classes = []
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'

    def get_queryset(self):
        query_result = Review.objects.filter(restaurant=self.kwargs.get('restaurant_id'))
        return query_result


# gets review by id
class ListSpecificReviewById(ListCreateAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['content', 'restaurant']


# deletes or updates the review by id
class DeleteUpdateReview(RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'review_id'
    permission_classes = [IsAuthenticated, IsOwnerOfReviewOrReadOnly]


# get all reviews from one user
class GetReviewsOfUser(ListAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        user = User.objects.get(id=user_id)
        reviews = user.reviews.all().order_by('created').reverse()    # this returns instances

        return reviews


# likes reviews
class ToggleLike(GenericAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]
    queryset = Review.objects.all()

    # the method which likes or unlikes the review
    def post(self, request, review_id):
        review = get_object_or_404(Review, id=review_id)
        if request.user in review.likes.all():    # "all" gets all the users, and request.user checks is it is
            review.likes.remove(request.user)     # already liked by that particular user
        else:
            review.likes.add(request.user)
        return Response(self.get_serializer(instance=review).data)


# get the list of the reviews liked by user
class ReviewsLikedByUser(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Review.objects.filter(likes=self.request.user)


class CommentedByUserReviews(GenericAPIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def get(self, request):
        reviews = Review.objects.filter(comments__user=request.user)
        return Response(ReviewSerializer(reviews, many=True).data)

