from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import RegisterSerializer
from rest_framework.response import Response
from rest_framework import status
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

