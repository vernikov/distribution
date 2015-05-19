from flask import Blueprint

web_client = Blueprint('web_client', __name__)

from web_client import views
