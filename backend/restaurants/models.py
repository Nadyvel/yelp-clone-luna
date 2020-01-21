from django.db import models

from project import settings


class Restaurant(models.Model):

    user = models.ForeignKey(
        on_delete=models.SET_NULL,
        to=settings.AUTH_USER_MODEL,
        related_name='restaurants',
        null=True,
    )

    name = models.CharField(
        verbose_name='restaurant_name',
        max_length=50,
    )

    # country = models.CharField(
    #     verbose_name='select country',
    #     max_length=50,
    #
    # )

    street = models.CharField(
        verbose_name='restaurant_street',
        max_length=50,
    )

    city = models.CharField(
        verbose_name='restaurant_city',
        max_length=50,
    )

    zip = models.CharField(
        verbose_name='restaurant_zip',
        max_length=10,
        blank=True,
    )

    website = models.URLField(
        verbose_name='restaurant_website',
        # default length 200 is used
        blank=True,
    )
    phone_number = models.CharField(
        verbose_name='restaurant_phone_number',
        max_length=15,
    )

    email = models.EmailField(
        verbose_name='restaurant_email',
        blank=True,
    )

    opening_hours = models.CharField(
        verbose_name='restaurant_opening_hours',
        max_length=50,
    )

    LOW = 'LOW'
    MEDIUM = 'MEDIUM'
    HIGH = 'HIGH'
    PRICE_LEVEL_CHOICES = (
        (LOW, '$'),
        (MEDIUM, '$$'),
        (HIGH, '$$$'),
    )

    price_level = models.CharField(
        verbose_name='restaurant_price_level',
        max_length=6,
        choices=PRICE_LEVEL_CHOICES,
    )

    # category = models.CharField(
    #     verbose_name='restaurant_category',
    #     on_delete=models.SET_NULL,
    #     related_name='restaurants',
    #     null=True,
    #     blank=True,
    #
    # )

    ASIAN = 'ASIAN'
    ITALIAN = 'ITALIAN'
    MEXICAN = 'MEXICAN'
    SWISS = 'SWISS'
    CATEGORY_CHOICES = (
        (ASIAN, ASIAN),
        (ITALIAN, ITALIAN),
        (MEXICAN, MEXICAN),
        (SWISS, SWISS)
    )

    restaurant_category = models.CharField(
        verbose_name='restaurant_category',
        max_length=30,
        choices=CATEGORY_CHOICES,
        null=True,
        blank=True
    )

    created = models.DateTimeField(
        verbose_name='date_created',
        auto_now_add=True,
    )

    modified = models.DateTimeField(
        verbose_name='date_modified',
        auto_now=True,
    )

    image = models.ImageField(
        verbose_name='restaurant_image',
        blank=True
    )

    timestamp = models.DateTimeField(
        verbose_name='timestamp',
        auto_now_add=True  # adds date and time automatically to the restaurant.
    )

    # class Meta:
    #     ordering = ('-timestamp')