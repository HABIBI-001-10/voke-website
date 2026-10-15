"""WSGI config for Voke project."""
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "voke.settings")
application = get_wsgi_application()
