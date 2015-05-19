from secrets import development_postgres_uri
from secrets import secret_key
from secrets import project_path

DEBUG = True
SQLALCHEMY_DATABASE_URI = development_postgres_uri
SECRET_KEY = secret_key
UPLOAD_FOLDER = project_path + '/client/static/files'
