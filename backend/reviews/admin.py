from django.contrib import admin

# Register your models here.
from django.contrib import admin

from reviews.models import Review

admin.site.register(Review)
