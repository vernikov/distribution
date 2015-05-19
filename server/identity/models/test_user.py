from flask.ext.testing import TestCase


class TestUser(TestCase):
    def create_app(self):
        from core import app

        return app

    def test_user_password(self):
        from identity.models.user import User

        email = 'bob@gmail.com'
        password = '123'
        not_password = '321'
        user = User(email, password)

        assert user.check_password(password) is True
        assert user.check_password(not_password) is False
