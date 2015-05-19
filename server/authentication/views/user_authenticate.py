import jwt
from flask import request
from flask import jsonify
from core.config.secrets import secret_key
from authentication import authentication
from identity.models.user import User


@authentication.route('/user/authentication', methods=['POST'])
def authenticate():
    # get data from request
    try:
        email = request.get_json()['data']['email']
        password = request.get_json()['data']['password']
    except KeyError:
        return jsonify(error='Invalid email or password'), 400

    # find user if exists
    user = User.query.filter_by(email=email).first()

    if not user or not user.check_password(password):
        return jsonify(error='User not found'), 404

    # create access token
    token = jwt.encode({'id': user.id, 'scope': 'basic'}, secret_key)

    return jsonify(user=user.serialize(), token=token)
