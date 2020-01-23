from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
from project import settings
from reviews.models import Review

User = get_user_model()


class Comment(models.Model):

    user = models.ForeignKey(
        verbose_name='user',
        to=settings.AUTH_USER_MODEL,
        related_name='comments',
        on_delete=models.SET_NULL,
        null=True,
    )

    restaurant_review = models.ForeignKey(
        Review,
        related_name='rev_comments',
        on_delete=models.CASCADE,
    )

    comments_likes = models.ManyToManyField(
        to=settings.AUTH_USER_MODEL,
        related_name='comments_likes',
        blank=True
    )

    comments_content = models.TextField(
        verbose_name='comments_content',
    )

    created = models.DateTimeField(
        verbose_name='date_created',
        auto_now_add=True,
    )

    modified = models.DateTimeField(
        verbose_name='date_modified',
        auto_now=True,
    )
