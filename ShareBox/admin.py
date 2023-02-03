from django.contrib import admin
from .models import User
from django.db import models
from django.forms import Textarea
from django.contrib.auth.admin import UserAdmin
# Register your models here.

class UserAdminConfig(UserAdmin):
    model = User
    search_fields = ('email', 'username')
    list_filter = ('username', 'email', 'is_active', 'is_staff')
    ordering = ('username',)
    list_display = ('username', 'email', 'id', 'is_active', "is_staff")
    fieldsets = (
        (None, {'fields': ('email', 'username',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {'fields': ('about',)}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )

admin.site.register(User,UserAdminConfig)