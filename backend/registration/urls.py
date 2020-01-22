from django.urls import path

from project.api.registration.views import Registration, RegistrationValidation


urlpatterns = [
    path('', Registration.as_view()),
    path('validate/', RegistrationValidation.as_view())
]