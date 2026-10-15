"""API URL configuration."""
from django.urls import path
from . import views

app_name = "api"

urlpatterns = [
    # Contact form submission
    path("contact/", views.contact_submit, name="contact-submit"),
    # Static data
    path("services/", views.services_list, name="services-list"),
    path("projects/", views.projects_list, name="projects-list"),
]
