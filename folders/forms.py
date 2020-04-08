from folders import app
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from folders.models import User



class RegistrationForm(FlaskForm):
    #username = StringField('Username', validators=[DataRequired(), Length(min = 2, max = 20)])
    email = StringField("email", validators=[DataRequired(), Email()])
    password = PasswordField('password', validators=[DataRequired()])
    #confirm_password = PasswordField("Confirm Password", validators=[DataRequired(), EqualTo("Password")])
    submit = SubmitField("Sign Up")

    def validate(self, email):
        user = User.query.filter_by(email = email.data).first()
        if user:
            raise ValidationError('Email taken')


#class SignInForm(FlaskForm):
 #   email = StringField("Email", validators=[DataRequired(), Email()])
  #  password = PasswordField('Password', validators=[DataRequired()])
   # remember = BooleanField('Remember Me')
    #submit = SubmitField("Login")