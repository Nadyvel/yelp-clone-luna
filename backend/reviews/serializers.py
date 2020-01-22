from rest_framework import serializers

from reviews.models import Review
from users.serializers import UserSerializer


class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    total_likes = serializers.SerializerMethodField()  # searches for a function which is called get_total_likes and executes it

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ['user']

    def get_total_likes(self, review):
        return review.likes.count()   # gives all the relations and the amount of likes for the post


# class CommentsSerializer(serializers.ModelSerializer):
#     owner = UserSerializer(required=False)
#
#     class Meta:
#         model = Comments
#         fields = '__all__'
#         read_only_fields = ['owner']