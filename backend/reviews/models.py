from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

# Create your models here.
from project import settings
from restaurants.models import Restaurant


class Review(models.Model):

    user = models.ForeignKey(
        verbose_name='user',
        to=settings.AUTH_USER_MODEL,
        related_name='reviews',
        on_delete=models.SET_NULL,
        null=True,
    )

    restaurant = models.ForeignKey(
        Restaurant,
        related_name='reviews',
        on_delete=models.CASCADE,
    )

    content = models.TextField(
        verbose_name='review_content',
    )

    rating = models.IntegerField(
        verbose_name='restaurant_rating',
        validators=[MaxValueValidator(5), MinValueValidator(1)]
    )

    modified = models.DateTimeField(
        verbose_name='date_modified',
        auto_now=True,
    )

    timestamp = models.DateTimeField(
        verbose_name='timestamp',
        auto_now_add=True  # adds date and time automatically to the restaurant.
    )

    class Meta:
        verbose_name = 'Review'
        verbose_name_plural = 'Reviews'
        ordering = ['-modified']
        unique_together = [(
             'user', 'restaurant'
        )]
