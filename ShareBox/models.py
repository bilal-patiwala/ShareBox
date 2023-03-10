from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.

class UserManager(BaseUserManager):
    def create_superuser(self, email, username, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, username, password, **other_fields)

    def create_user(self, email, username, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **other_fields)
        user.set_password(password)
        user.save()
        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=254)
    username = models.CharField(max_length=54, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

class Product(models.Model):
    product_name = models.CharField(max_length=50, blank=False)
    product = models.FileField(upload_to='product',blank=False)
    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product', blank=True)
    product_description = models.CharField(max_length=1000, blank=True)
    price = models.DecimalField(max_digits=10000, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name + " and seller is: " + self.seller.username


class Transaction(models.Model):
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name="buyer")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="resource")
    
    amount_paid = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)


    