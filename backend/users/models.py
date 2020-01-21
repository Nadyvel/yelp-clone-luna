import random

from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
def code_generator(length=6):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for i in range(length))


class User(AbstractUser):
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    location = models.CharField(
        verbose_name='user_location',
        max_length=30,
    )

    phone_number = models.CharField(
        verbose_name='user_phone_number',
        max_length=15,
    )

    things_love = models.TextField(
        verbose_name='things_user_love',
    )

    description = models.TextField(
        verbose_name='user_description',
    )

    image = models.ImageField(
        blank=True
    )

    registration_code = models.CharField(
        verbose_name='registration_code',
        max_length=6,
        default=code_generator,
    )
