from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.product.models import Product
from apps.user.serializers import UserSerializer

User = get_user_model()


class ProductMinimalSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    # reviews_counter = serializers.SerializerMethodField()
    #
    # def get_reviews_counter(self, product):
    #     return product.fk_review_product.all().count()

    class Meta:
        model = Product
        fields = '__all__'
