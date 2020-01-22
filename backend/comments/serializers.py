from rest_framework import serializers

from comments.models import Comment
from users.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['user']