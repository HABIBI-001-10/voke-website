"""API serializers with server-side validation."""
import re
from rest_framework import serializers
from .models import ContactSubmission, ServiceChoice, BudgetChoice


class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = [
            "name",
            "email",
            "phone",
            "company",
            "service",
            "budget",
            "message",
            "privacy_consent",
        ]

    def validate_name(self, value: str) -> str:
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("Name must be at least 2 characters.")
        return value

    def validate_phone(self, value: str) -> str:
        value = re.sub(r"\s+", "", value)
        if not re.match(r"^\+?[0-9]{7,15}$", value):
            raise serializers.ValidationError("Enter a valid phone number.")
        return value

    def validate_message(self, value: str) -> str:
        value = value.strip()
        if len(value) < 10:
            raise serializers.ValidationError("Message must be at least 10 characters.")
        return value

    def validate_privacy_consent(self, value: bool) -> bool:
        if not value:
            raise serializers.ValidationError(
                "You must agree to the privacy policy to submit this form."
            )
        return value

    def validate_service(self, value: str) -> str:
        valid = [choice[0] for choice in ServiceChoice.choices]
        if value not in valid:
            raise serializers.ValidationError("Invalid service choice.")
        return value
