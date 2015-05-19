from flask.ext.testing import TestCase


class TestApp(TestCase):
    def create_app(self):
        from core import app

        return app

    def test_core_database(self):
        from core.services import postgres

        # test if database is binded to app
        assert postgres.get_app().name == 'core'
