from django.contrib.auth import get_user_model
from django.core.mail import EmailMessage

from rest_framework import serializers


User = get_user_model()


class RegistrationSerializer(serializers.Serializer):
    email = serializers.EmailField(
        label='Registration e-mail address'
    )

    def validate_email(self, email):
        try:
            User.objects.get(email=email)
            raise serializers.ValidationError('User with this email exists.')
        except User.DoesNotExist:
            return email

    @staticmethod
    def send_registration_email(email, code):
        message = EmailMessage(
            subject='Welcome to Luna',
            body=f'Follow this link to finish your registration'
                 f'https://luna-aquarius.propulsion-learn.ch/api/registration/verification/{email}/{code}/',
            to=[email],
        )
        message.send()

    def save(self, validated_data):
        email = validated_data.get('email')
        new_user = User.objects.create_user(
            username=email,
            email=email,
            is_active=False
        )
        self.send_registration_email(
            email=email,
            code=new_user.registration_code,
        )
        return new_user


class RegistrationValidationSerializer(RegistrationSerializer):
    code = serializers.CharField(
        label='code',
        write_only=True
    )
    password = serializers.CharField(
        label='password',
        write_only=True
    )
    password_repeat = serializers.CharField(
        label='password_repeat',
        write_only=True
    )
    username = serializers.CharField(
        label='username',
    )
    email = serializers.EmailField(
        label='email'
    )
    location = serializers.CharField(
        label='location'
    )

    def validate_email(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError('Email invalid.')

    def validate_username(self, username):
        try:
            User.objects.get(username=username)
            raise serializers.ValidationError('Username already taken.')
        except User.DoesNotExist:
            return username

    def validate(self, data):
        user = data.get('email')
        if data.get('password') != data.get('password_repeat'):
            raise serializers.ValidationError({
                'password_repeat': 'Passwords do not match.'
            })

        if data.get('code') != user.registration_code or user.is_active:
            raise serializers.ValidationError({
                'code': 'Wrong code or already validated.'
            })
        return data

    def save(self, validated_data):
        user = validated_data.get('email')
        user.username = validated_data.get('username')
        user.location = validated_data.get('location')
        user.is_active = True
        user.set_password(validated_data.get('password'))
        user.save()
        return user
