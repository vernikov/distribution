from flask import Blueprint

identity = Blueprint('identity', __name__)

from identity.views import user_create
from identity.views import user_read
from identity.views import user_update
from identity.views import user_delete
from identity.views import user_list

from identity.views import avatar_create
