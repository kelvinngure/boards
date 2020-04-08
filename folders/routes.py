from flask import Flask
from folders import db, bcrypt, app
from folders.models import User
from passlib.hash import sha256_crypt
from flask_sqlalchemy import SQLAlchemy
from folders.forms import RegistrationForm


@app.route('/', methods=['GET', 'POST'])
def register():
    return ("HHHHHHHHHHHHHHHHHHHHH")