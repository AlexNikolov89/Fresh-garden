# Generated by Django 3.1.2 on 2020-11-08 18:25

import apps.product.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('category', models.CharField(max_length=200)),
                ('location', models.CharField(blank=True, default='', max_length=80)),
                ('email', models.EmailField(blank=True, max_length=254, null=True, unique=True)),
                ('stock', models.IntegerField(null=True)),
                ('price', models.FloatField(null=True)),
                ('promotion', models.FloatField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, upload_to=apps.product.models.user_directory_path)),
                ('deliver_within_radius', models.IntegerField(blank=True, null=True)),
                ('description', models.CharField(blank=True, max_length=300)),
                ('expiration_date', models.DateField(blank=True, null=True)),
            ],
        ),
    ]
