# Register your models here.
from django.contrib import admin

from restaurants.models import Restaurant, Comments

admin.site.register(Restaurant)
admin.site.register(Comments)
