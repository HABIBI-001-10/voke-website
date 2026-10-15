"""API admin registration."""
from django.contrib import admin
from .models import ContactSubmission


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "company", "service", "submitted_at"]
    list_filter = ["service", "submitted_at"]
    search_fields = ["name", "email", "company", "message"]
    readonly_fields = ["submitted_at", "ip_address"]
    ordering = ["-submitted_at"]
