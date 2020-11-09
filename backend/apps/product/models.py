from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/name/<filename>
    return f'{instance.name}/{filename}'


class Product(models.Model):
    author = models.ForeignKey(
        to=User,
        related_name='fk_product_to_user',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    name = models.CharField(
        max_length=200,
    )
    category = models.CharField(
        max_length=200,
    )
    location = models.CharField(
        max_length=80,
        blank=True,
        default=""
    )
    email = models.EmailField(
        unique=True,
        null=True,
        blank=True
    )
    stock = models.IntegerField(
        null=True,
    )
    price = models.FloatField(
        null=True,
    )
    # TODO related to the model Promotion
    promotion = models.FloatField(
        null=True,
        blank=True
    )
    image = models.ImageField(
        upload_to=user_directory_path,
        blank=True,
        null=False
    )
    deliver_within_radius = models.IntegerField(
        null=True,
        blank=True
    )
    description = models.CharField(
        max_length=300,
        blank=True
    )
    expiration_date = models.DateField(
        null=True,
        blank=True
    )
    # COST_PER = [
    #     ({price}, '/g'),
    #     ({price}, '/kg'),
    #     ({price}, 'piece'),
    # ]
    # # [...]
    # cost_per = models.JSONField(
    #     choices=COST_PER,
    #     default="",
    # )
    # shipping = models.ManyToManyField(
    #     to=User,
    #     related_name='products',
    #     on_delete=models.CASCADE,
    #     null=True,
    #     blank=True
    # )
    # order_products = models.ManyToOneRel(
    #      to=User,
    #      related_name='products',
    #      on_delete=models.CASCADE,
    #      null=True,
    #      blank=True
    # )

    def __str__(self):
        return f"{self.author}: {self.name[0:100]}"
