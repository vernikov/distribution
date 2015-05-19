from flask import render_template
from web_client import web_client


@web_client.route('/')
def index_page():
    return render_template('core/index.html')
