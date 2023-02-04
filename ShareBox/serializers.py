from rest_framework import serializers
from .models import User, Product

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'password']
    
    def create(self, validated_data):
        user = User.objects.create_user(email=validated_data['email'], username=validated_data['username'], password=validated_data['username'])
        user.save()
        return user

class ProductSerializer(serializers.ModelSerializer):
    seller = serializers.PrimaryKeyRelatedField(source='seller.username', read_only=True)
    class Meta:
        model = Product
        fields = ['product_name','seller', 'product_description', 'price', 'id', 'image']
