# Generated by Django 3.1.2 on 2020-11-12 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_auto_20201110_1725'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='products/kopfsalat.jpg', upload_to='products/'),
        ),
    ]
