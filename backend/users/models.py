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

    username = models.CharField(
        verbose_name='username',
        max_length=150,
        unique=True,
    )

    first_name = models.CharField(
        verbose_name='first_name',
        max_length=150,
    )

    last_name = models.CharField(
        verbose_name='last_name',
        max_length=150,
    )

    # email_address = models.EmailField(
    #     verbose_name='email address',
    # )

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
        verbose_name='user_avatar',
        blank=True
    )

    # timestamp = models.DateTimeField(
    #     verbose_name='timestamp',
    #     auto_now_add=True
    # )

    registration_code = models.CharField(
        verbose_name='registration_code',
        max_length=6,
        default=code_generator,
    )
