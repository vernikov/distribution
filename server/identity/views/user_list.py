from flask import jsonify
from identity import identity
from identity.models.user import User


@identity.route('/user')
def list():
    # find all users
    users = User.query.all()
    users = [user.serialize() for user in users]

    return jsonify(users=users)
