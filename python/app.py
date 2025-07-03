from flask import Flask, render_template, session, request

from config import *


secret_key: str = get_secret_key()

if not secret_key:
    raise ValueError("No secret key set")


app = Flask(__name__)


@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    if username == 'admin' and password == 'password':

        return "Login successful", 200
    else:
        return "Invalid credentials", 401


@app.route('/songs',methods=['GET'])
def get_songs():
    pass
