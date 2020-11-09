# from rest_framework.generics import GenericAPIView, ListAPIView
#
# from apps.cart.models import Cart
# from apps.cart.serializers import CartSerializer
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response
#
#
# class AddToCart(GenericAPIView):
#     """
#     POST:
#     Toggle Add product to cart by logged in users
#     """
#     queryset = Cart
#     serializer_class = CartSerializer
#     lookup_url_kwarg = 'product_id'
#
#     def post(self, request, *args, **kwargs):
#         target_product = self.get_object()
#         logged_in_user = self.request.product
#         if target_product in logged_in_user.products.all():
#             logged_in_user.products.remove(target_product)
#         else:
#             logged_in_user.products.add(target_product)
#         return Response(self.get_serializer(logged_in_user).data)
#
#
# class GetListOfProductsInCart(ListAPIView):
#     """
#     GET: list of all the products in the cart.
#     """
#     permission_classes = (IsAuthenticated,)
#     queryset = Cart.objects.all()
#     serializer_class = CartSerializer
#
#     def get(self, request, *args, **kwargs):
#         user = self.request.user
#         cart_items = user.cart_items.all()
#         serializer = self.get_serializer(cart_items, many=True)
#         return Response(serializer.data)
