# Generated by Django 3.1.2 on 2020-11-15 19:01

import apps.registration_profile.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationProfile',
            fields=[
                ('code', models.CharField(default=apps.registration_profile.models.code_generator, max_length=5)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='reg_profile', serialize=False, to='user.user')),
                ('code_used', models.BooleanField(default=False)),
            ],
        ),
    ]
