import os
from flask import jsonify
from flask import request
from werkzeug import secure_filename
from core.services import postgres
from core.config.default import UPLOAD_FOLDER
from identity import identity
from identity.models.avatar import Avatar


@identity.route('/upload', methods=['POST'])
def upload():
    # get data from request
    try:
        user = request.data['user']
    except KeyError:
        return jsonify(error='Invalid user id'), 400

    # get file from request
    try:
        file = request.files['file']
    except KeyError:
        return jsonify(error='Invalid image file'), 400
    image = secure_filename(file.filename)
    file.save(os.path.join(UPLOAD_FOLDER, image))

    avatar = Avatar(image, user)

    # save avatar to the database
    postgres.session.add(avatar)
    postgres.session.commit()

    return jsonify(avatar=file.filename)
