from flask import Flask

from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from folders import routes

app = Flask(__name__)
app.config['SECRET_KEY'] = 'jk43h5kh3kj5h3kj5hkjh53jkh543yiu5h3d4fg3sgse53f45g4'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///boards.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)





if __name__=='__main__':
    app.run(debug=True, port='19002')



