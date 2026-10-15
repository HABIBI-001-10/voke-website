"""
API views.

POST /api/contact/   — Accept, validate, store, and optionally email a contact submission.
GET  /api/services/  — Return the list of services (static data).
GET  /api/projects/  — Return portfolio project placeholders.
"""
import logging
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.decorators import api_view, throttle_classes
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle

from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer

logger = logging.getLogger(__name__)


def _get_client_ip(request) -> str | None:
    x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
    if x_forwarded_for:
        return x_forwarded_for.split(",")[0].strip()
    return request.META.get("REMOTE_ADDR")


def _attempt_email(submission: ContactSubmission) -> bool:
    """
    Send a notification email to the configured recipient.
    Returns True on success, False if email is not configured or delivery fails.
    Email delivery is best-effort; the submission is always stored.
    """
    if not getattr(settings, "EMAIL_HOST", ""):
        return False
    try:
        send_mail(
            subject=f"[Voke] New enquiry from {submission.name}",
            message=(
                f"Name: {submission.name}\n"
                f"Email: {submission.email}\n"
                f"Phone: {submission.phone}\n"
                f"Company: {submission.company}\n"
                f"Service: {submission.get_service_display()}\n"
                f"Budget: {submission.get_budget_display()}\n\n"
                f"Message:\n{submission.message}\n"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_RECIPIENT_EMAIL],
            fail_silently=False,
        )
        return True
    except Exception as exc:  # noqa: BLE001
        logger.error("Email delivery failed: %s", exc)
        return False


@api_view(["POST"])
@throttle_classes([AnonRateThrottle])
def contact_submit(request):
    """
    Accept a contact form submission.
    Always stores the validated data; attempts email notification when configured.
    """
    serializer = ContactSubmissionSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(
            {"status": "error", "errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    submission = serializer.save(ip_address=_get_client_ip(request))
    email_sent = _attempt_email(submission)

    logger.info(
        "Contact submission #%s stored (email_sent=%s)", submission.pk, email_sent
    )

    return Response(
        {
            "status": "success",
            "message": (
                "Thank you for reaching out. We have received your message "
                "and will be in touch within 1–2 business days."
            ),
        },
        status=status.HTTP_201_CREATED,
    )


# ---------------------------------------------------------------------------
# Static data endpoints — replace with database models when content is ready
# ---------------------------------------------------------------------------

SERVICES = [
    {
        "id": "advertising",
        "title": "Advertising",
        "tagline": "Campaigns that move people, and markets.",
        "description": (
            "From strategy to screen, we create advertising that earns attention "
            "and builds brands. We handle campaign strategy, creative concept development, "
            "media planning, production coordination, and ongoing campaign optimisation."
        ),
        "icon": "megaphone",
        "highlights": [
            "Campaign strategy and brief development",
            "Creative concept and copywriting",
            "Media planning and buying",
            "Production coordination",
            "Post-campaign analysis and optimisation",
        ],
    },
    {
        "id": "digital_marketing",
        "title": "Digital Marketing",
        "tagline": "Precision growth across every digital channel.",
        "description": (
            "We connect your brand with the audiences that matter most — "
            "through search, social, content, and performance channels — "
            "and measure everything so every rupee works harder."
        ),
        "icon": "trending-up",
        "highlights": [
            "Search engine optimisation (SEO)",
            "Social media management and strategy",
            "Paid search and social advertising",
            "Content strategy and creation",
            "Analytics, reporting, and CRO",
        ],
    },
    {
        "id": "consultancy",
        "title": "Business Consultancy",
        "tagline": "Clarity for the decisions that matter.",
        "description": (
            "Whether you are launching, scaling, or repositioning, "
            "we help you identify opportunities, sharpen your positioning, "
            "and build a practical roadmap for sustainable growth."
        ),
        "icon": "briefcase",
        "highlights": [
            "Business planning and market analysis",
            "Brand positioning and messaging",
            "Growth strategy and roadmapping",
            "Process improvement",
            "Competitive landscape review",
        ],
    },
    {
        "id": "web_dev",
        "title": "Website & Software Development",
        "tagline": "Digital products built to perform.",
        "description": (
            "We design and build responsive websites, web applications, "
            "and custom software that serve your users and your business goals — "
            "with reliable ongoing support included."
        ),
        "icon": "code",
        "highlights": [
            "Responsive website design and development",
            "Web application development",
            "Custom software and integrations",
            "E-commerce solutions",
            "Maintenance and ongoing support",
        ],
    },
]

# Placeholder projects — replace with real case studies when content is ready.
# Do not present placeholder data as real Voke work in production.
PROJECTS = [
    {
        "id": "placeholder-001",
        "title": "[Placeholder] Brand Campaign — Consumer Goods",
        "client": "[Client Name — Replace]",
        "industry": "Consumer Goods",
        "service": "advertising",
        "cover": None,
        "challenge": "[Replace with the real client challenge]",
        "insight": "[Replace with the strategic insight]",
        "execution": "[Replace with creative and technical execution details]",
        "outcome": "[Replace with verified, client-approved outcomes]",
        "is_placeholder": True,
    },
    {
        "id": "placeholder-002",
        "title": "[Placeholder] Digital Growth — Retail",
        "client": "[Client Name — Replace]",
        "industry": "Retail",
        "service": "digital_marketing",
        "cover": None,
        "challenge": "[Replace with the real client challenge]",
        "insight": "[Replace with the strategic insight]",
        "execution": "[Replace with creative and technical execution details]",
        "outcome": "[Replace with verified, client-approved outcomes]",
        "is_placeholder": True,
    },
    {
        "id": "placeholder-003",
        "title": "[Placeholder] Web Platform — B2B Services",
        "client": "[Client Name — Replace]",
        "industry": "B2B Services",
        "service": "web_dev",
        "cover": None,
        "challenge": "[Replace with the real client challenge]",
        "insight": "[Replace with the strategic insight]",
        "execution": "[Replace with creative and technical execution details]",
        "outcome": "[Replace with verified, client-approved outcomes]",
        "is_placeholder": True,
    },
    {
        "id": "placeholder-004",
        "title": "[Placeholder] Growth Strategy — Startup",
        "client": "[Client Name — Replace]",
        "industry": "Technology",
        "service": "consultancy",
        "cover": None,
        "challenge": "[Replace with the real client challenge]",
        "insight": "[Replace with the strategic insight]",
        "execution": "[Replace with creative and technical execution details]",
        "outcome": "[Replace with verified, client-approved outcomes]",
        "is_placeholder": True,
    },
]


@api_view(["GET"])
def services_list(request):
    return Response({"status": "success", "data": SERVICES})


@api_view(["GET"])
def projects_list(request):
    service_filter = request.query_params.get("service")
    data = PROJECTS
    if service_filter:
        data = [p for p in data if p["service"] == service_filter]
    return Response({"status": "success", "data": data, "count": len(data)})
