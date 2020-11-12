# Generated by Django 3.1.2 on 2020-11-11 14:45

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
                ('name', models.CharField(max_length=255)),
                ('category', models.CharField(max_length=200)),
                ('location', models.CharField(blank=True, default='', max_length=80)),
                ('email', models.EmailField(blank=True, max_length=254, null=True, unique=True)),
                ('stock', models.IntegerField(null=True)),
                ('price', models.FloatField()),
                ('promotion', models.FloatField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, default='products/kopfsalat.jpg', upload_to='products/')),
                ('deliver_within_radius', models.IntegerField(blank=True, null=True)),
                ('description', models.CharField(blank=True, max_length=300)),
                ('expiration_date', models.DateField(blank=True, null=True)),
            ],
        ),
    ]
