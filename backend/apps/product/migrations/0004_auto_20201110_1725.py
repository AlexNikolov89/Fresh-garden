# Generated by Django 3.1.2 on 2020-11-10 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_auto_20201110_1637'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='products/IMG_9996.jpg', upload_to='products/'),
        ),
    ]
