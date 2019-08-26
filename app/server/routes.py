from flask import render_template, Blueprint

hello_blueprint = Blueprint('hello',__name__)

@hello_blueprint.route('/')
def index():
	return render_template("index.html")

@hello_blueprint.route('/hello')
def hello():
	return 'Hello to the World of Flask!'