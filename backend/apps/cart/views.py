from apps.product.models import Product
from cart.cart import Cart
from rest_framework import status
from rest_framework.generics import CreateAPIView, DestroyAPIView, UpdateAPIView, RetrieveDestroyAPIView, ListAPIView

from rest_framework.response import Response


class CartAddItem(CreateAPIView):
    """
    POST: Add product to cart by product id
    """

    def create(self, request, *args, **kwargs):
        cart = Cart(request)
        product = Product.objects.get(id=kwargs['id'])
        cart.add(product=product)
        return Response(cart.cart, status=status.HTTP_200_OK)


class CartRemoveItem(DestroyAPIView):
    """
    DELETE: Remove item from cart by product id
    """

    def destroy(self, request, *args, **kwargs):
        cart = Cart(request)
        product = Product.objects.get(id=kwargs['id'])
        cart.remove(product)
        return Response(cart.cart, status=status.HTTP_204_NO_CONTENT)


class CartIncrementQuantity(UpdateAPIView):
    """
    PATCH: Increment quantity of item in cart by product id
    """

    def update(self, request, *args, **kwargs):
        cart = Cart(request)
        product = Product.objects.get(id=kwargs['id'])
        cart.add(product=product)
        return Response(cart.cart, status=status.HTTP_200_OK)


class CartDecrementQuantity(UpdateAPIView):
    """
    PATCH: Decrement quantity of item in cart by product id
    """

    def update(self, request, *args, **kwargs):
        cart = Cart(request)
        product = Product.objects.get(id=kwargs['id'])
        cart.decrement(product=product)
        return Response(cart.cart, status=status.HTTP_200_OK)


class ClearCartView(RetrieveDestroyAPIView):
    """
    DELETE: Clear cart
    """

    def destroy(self, request, *args, **kwargs):
        cart = Cart(request)
        cart.clear()
        return Response(cart.cart, status=status.HTTP_204_NO_CONTENT)


class CartDetailsView(ListAPIView):
    """
    GET: get cart details
    """

    def get(self, request, *args, **kwargs):
        cart = Cart(request)
        return Response(cart.cart, status=status.HTTP_200_OK)
