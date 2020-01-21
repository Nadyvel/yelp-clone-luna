# Generated by Django 3.0.2 on 2020-01-20 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='restaurant_name')),
                ('street', models.CharField(max_length=50, verbose_name='restaurant_street')),
                ('city', models.CharField(max_length=50, verbose_name='restaurant_city')),
                ('zip', models.CharField(blank=True, max_length=10, verbose_name='restaurant_zip')),
                ('website', models.URLField(blank=True, verbose_name='restaurant_website')),
                ('phone_number', models.CharField(max_length=15, verbose_name='restaurant_phone_number')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='restaurant_email')),
                ('opening_hours', models.CharField(max_length=50, verbose_name='restaurant_opening_hours')),
                ('price_level', models.CharField(choices=[('LOW', '$'), ('MEDIUM', '$$'), ('HIGH', '$$$')], max_length=6, verbose_name='restaurant_price_level')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='date_created')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='date_modified')),
                ('image', models.ImageField(blank=True, upload_to='', verbose_name='restaurant_image')),
                ('timestamp', models.DateTimeField(auto_now_add=True, verbose_name='timestamp')),
            ],
        ),
    ]
