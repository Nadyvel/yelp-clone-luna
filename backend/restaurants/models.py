from django.db import models


# Create your models here.
from project import settings


class Restaurant(models.Model):
    restaurant = models.ForeignKey(
        verbose_name='restaurant',
        to=settings.AUTH_RESTAURANT_MODEL,  # authentication of the restaurant in the settings.py file
        on_delete=models.CASCADE,
        related_name='users',  # reverse relation from restaurant to user
        null=True
    )

    title = models.TextField(
        verbose_name='title',
        blank=True,
        null=True
    )

    content = models.TextField(
        verbose_name='content',
        blank=True,
        null=True
    )

    restaurantpic = models.ImageField(
        upload_to='',
        blank=True,
        null=True
    )

    category = models.TextField(
        verbose_name='category',
        blank=True,
        null=True
    )

    timestamp = models.DateTimeField(
        verbose_name='timestamp',
        auto_now_add=True  # adds date and time automatically to the restaurant.
    )

    def __str__(self):
        return f'{self.restaurant} / {self.restaurantpic}/ {self.title} / {self.content}'

    # the like method many to many
    # many to many creates a new table which connects the posts to the user.
    rated_by = models.ManyToManyField(
        to=settings.AUTH_USER_MODEL,
        related_name='ratings',
        blank=True
    )

    class Meta:
        ordering = ('-timestamp',)


class Comments(models.Model):

    comment = models.TextField(
        verbose_name='comment',
        blank=True,
    )

    users = models.ForeignKey(
        verbose_name='user',
        to=Restaurant,
        related_name='comments',
        on_delete=models.CASCADE,
        blank=True
    )

    restaurant = models.ForeignKey(
        verbose_name='restaurant',
        to=settings.AUTH_RESTAURANT_MODEL,
        on_delete=models.CASCADE,
        related_name='comments',
        blank=True
    )

    def __str__(self):
        return f' ID: {self.ID} / Comment: {self.comment}/ Restaurant: {self.restaurant}/ User:{self.user}/'
