"""
API models.

ContactSubmission stores every validated contact form submission.
Email delivery is attempted when EMAIL_HOST is configured; submissions
are always persisted so no data is lost when email is unavailable.
"""
import logging
from django.db import models

logger = logging.getLogger(__name__)


class ServiceChoice(models.TextChoices):
    ADVERTISING = "advertising", "Advertising"
    DIGITAL_MARKETING = "digital_marketing", "Digital Marketing"
    CONSULTANCY = "consultancy", "Business Consultancy"
    WEB_DEV = "web_dev", "Website & Software Development"
    NOT_SURE = "not_sure", "Not Sure Yet"


class BudgetChoice(models.TextChoices):
    UNDER_50K = "under_50k", "Under ₹50,000"
    FIFTY_TO_2L = "50k_2l", "₹50,000 – ₹2,00,000"
    TWO_TO_5L = "2l_5l", "₹2,00,000 – ₹5,00,000"
    ABOVE_5L = "above_5l", "Above ₹5,00,000"
    PREFER_NOT = "prefer_not", "Prefer not to say"


class ContactSubmission(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    company = models.CharField(max_length=200)
    service = models.CharField(
        max_length=30,
        choices=ServiceChoice.choices,
        default=ServiceChoice.NOT_SURE,
    )
    budget = models.CharField(
        max_length=20,
        choices=BudgetChoice.choices,
        blank=True,
        default="",
    )
    message = models.TextField()
    privacy_consent = models.BooleanField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)

    class Meta:
        ordering = ["-submitted_at"]
        verbose_name = "Contact Submission"
        verbose_name_plural = "Contact Submissions"

    def __str__(self):
        return f"{self.name} ({self.email}) — {self.submitted_at:%Y-%m-%d %H:%M}"
