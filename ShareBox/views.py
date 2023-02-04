from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import RegisterSerializer, ProductSerializer, ResourceSerializer, ShareResourceSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Product, User, Transaction
import json
import os
from django.conf import settings
import stripe
from rest_framework_simplejwt.authentication import JWTAuthentication

stripe.api_key = settings.STRIPE_SECRET_KEY
# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
@permission_classes((AllowAny, ))
def register(request):
    data = request.data
    serializer = RegisterSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes((AllowAny,))
def getProducts(request, product_name):
    queryset = Product.objects.filter(product_name__startswith=product_name)[:5]
    serializer = ProductSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_payment(request):
    try:
        t = request.headers.get('Authorization').split()
        t = t[1].split('}')
        access_token_obj = RefreshToken(t[0], verify=True)
        u=access_token_obj['username']
        buyer = User.objects.get(username=u)
        print(buyer)
        data = request.data
        print(data)
        prod_id = data['id']
        product = Product.objects.get(id=prod_id)
        tr = Transaction.objects.filter(buyer=buyer, product=product)
        if tr.first() is not None:
            return Response(status=status.HTTP_226_IM_USED)

        price = int(product.price)
        print(price)
        # Create a PaymentIntent with the order amount and currency
        intent = stripe.PaymentIntent.create(
            amount=price,
            currency='inr',
            automatic_payment_methods={
                'enabled': True,
            },
        )
        print(intent)
        if intent is not None:
            transaction = Transaction.objects.create(buyer=buyer, product=product, amount_paid=True)
            transaction.save()
        return Response({
            'clientSecret': intent['client_secret'],
        })
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def shareResource(request):
    t = request.headers.get('Authorization').split()
    print(t)
    t = t[1]
    access_token_obj = RefreshToken(t, verify=True)
    u=access_token_obj['username']
    buyer = User.objects.get(username=u)
    data = request.data

    serializer = ShareResourceSerializer(data=data, buyer=buyer)

    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def getResource(request):
    t = request.headers.get('Authorization').split()
    print(t)
    print("...................")
    t = t[1]
    print(t)
    access_token_obj = RefreshToken(t, verify=True)
    u=access_token_obj['username']
    buyer = User.objects.get(username=u)
    transaction = Transaction.objects.filter(buyer=buyer)
    products = []
    for t in transaction:
        products.append(t.product)
    
    print(products)

    serializer = ResourceSerializer(products, many=True)
    return Response(serializer.data)

