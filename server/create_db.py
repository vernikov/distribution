from core import postgres
from identity.models.user import User
from identity.models.avatar import Avatar

postgres.drop_all()
postgres.create_all()
