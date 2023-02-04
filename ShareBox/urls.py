from django.urls import path, include
from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    
    TokenRefreshView,
)
urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/',views.register,name='register'),
    path('getProduct/<str:product_name>/',views.getProducts, name='getProducts'),
    path('create-payment-intent/',views.create_payment,name='makePayment'),
    path('getResource/',views.getResource,name='getResource'),
    path('shareResource/',views.shareResource, name='shareResource')
]
