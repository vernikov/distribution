from flask import jsonify
from identity import identity
from identity.models.user import User


@identity.route('/user/<int:id>')
def read(id):
    # find user if exists
    user = User.query.filter_by(id=id).first()
    if not user:
        return jsonify(error='User not found'), 404

    return jsonify(user=user.serialize())
