from flask import Blueprint

authentication = Blueprint('authentication', __name__)

from authentication.views import user_register
from authentication.views import user_authenticate
