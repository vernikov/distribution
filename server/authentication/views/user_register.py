import jwt
from flask import request
from flask import jsonify
from core.config.secrets import secret_key
from core.services import postgres
from authentication import authentication
from identity.models.user import User


@authentication.route('/user/registration', methods=['POST'])
def user_register():
    # get data from request
    try:
        email = request.get_json()['data']['email']
        password = request.get_json()['data']['password']
    except KeyError:
        return jsonify(error='Invalid email or password'), 400

    # create user if not exists
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify(error='User with such email is already exists')
    user = User(email, password)

    # save user to the database
    postgres.session.add(user)
    postgres.session.commit()

    # create access token
    token = jwt.encode({'id': user.id, 'scope': 'basic'}, secret_key)

    return jsonify(user=user.serialize(), token=token)
