# get all reviews from one user
from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated

from comments.models import Comment
from comments.serializers import CommentSerializer
from reviews.permissions import IsOwnerOfReviewOrReadOnly

User = get_user_model()


class GetCommentsOfUser(ListAPIView):
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        user = User.objects.get(id=user_id)
        comments = user.comments.all().order_by('created').reverse()    # this returns instances

        return comments


class CreateComment(CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'review_id'

    # Creates new comment on the review
    def perform_create(self, serializer):
        review = self.kwargs['review_id']
        comment = Comment(user=self.request.user, review_id=review, **serializer.validated_data)
        comment.save()


class DeleteComment(DestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsAuthenticated, IsOwnerOfReviewOrReadOnly]