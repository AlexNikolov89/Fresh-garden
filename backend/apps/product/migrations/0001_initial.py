# Generated by Django 3.1.2 on 2020-11-15 18:40

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
                ('name', models.CharField(max_length=40)),
                ('category', models.CharField(choices=[('fruit', 'fruit'), ('vegetable', 'vegetable'), ('other', 'other')], default='fruit', max_length=10)),
                ('location', models.CharField(blank=True, default='', max_length=80)),
                ('stock', models.IntegerField(null=True)),
                ('price', models.FloatField()),
                ('units', models.CharField(choices=[('kg', 'kg'), ('piece', 'piece')], default='kg', max_length=10)),
                ('promotion', models.FloatField(blank=True, null=True)),
                ('image', models.ImageField(null=True, upload_to=apps.product.models.user_directory_path)),
                ('deliver_within_radius', models.IntegerField(blank=True, null=True)),
                ('description', models.CharField(blank=True, max_length=300)),
                ('expiration_date', models.DateField(blank=True, null=True)),
            ],
        ),
    ]
