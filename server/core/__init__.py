from flask import Flask
from core.services import postgres

# blueprints
from web_client import web_client
from identity import identity
from authentication import authentication
from authorization import authorization

# app
app = Flask(__name__)

# file storage
app.static_folder = '../../client/static'
app.template_folder = '../../client/templates'

# config
app.config.from_object('core.config.default')
# app.config.from_object('core.config.development')
# app.config.from_object('core.config.production')

# services
postgres.app = app
postgres.init_app(app)

# blueprints
app.register_blueprint(web_client)
app.register_blueprint(identity, url_prefix='/api')
app.register_blueprint(authentication, url_prefix='/api')
app.register_blueprint(authorization, url_prefix='/api')
