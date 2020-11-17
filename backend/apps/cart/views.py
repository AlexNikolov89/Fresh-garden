from apps.product.models import Product
from cart.cart import Cart
from rest_framework import status
from rest_framework.generics import CreateAPIView, DestroyAPIView, UpdateAPIView, RetrieveDestroyAPIView, ListAPIView, \
    RetrieveUpdateDestroyAPIView

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


class CheckOutCartView(RetrieveUpdateDestroyAPIView):
    """
    PATCH: Checkout current Cart and decrease the stock of the chosen items.
    """
    queryset = Product.objects.all()
    stock_storage = Product.stock

    def update(self, request, *args, **kwargs):
        cart = Cart(request)
        product = cart.quantity - Product.stock
        Product.decrement(product=product)
        return Response(cart.cart, status=status.HTTP_200_OK)


# make new cart url
# make new cart view (choose the same view class as update product)
# in cart view: queryset product, store stock in a ew variable
# in cart view: request data, store quantity in new variable
# compare variable -> if equal or greater: delete product and return stock
# if less: decrease stock of product and return quantity
