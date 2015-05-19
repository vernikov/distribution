from core.services import postgres


class Avatar(postgres.Model):
    id = postgres.Column(postgres.Integer, primary_key=True)
    user = postgres.Column(postgres.Integer)
    image = postgres.Column(postgres.Text)

    def __init__(self, image, user):
        self.image = image
        self.user = user

    def __repr__(self):
        return '<Avatar {}>'.format(self.id)

    def __str__(self):
        return '<Avatar {}>'.format(self.image)

    def serialize(self):
        return dict(
            image=self.image,
            user=self.user
        )
