from flask import Flask, redirect, render_template, url_for
from flask import request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = "2pZt'WFQ45~,"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hotel.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Hotel(db.Model):
    __tablename__ = "hotel"
    id = db.Column(db.Integer, primary_key=True)
    check_out = db.Column(db.String(20), nullable=False)
    check_in = db.Column(db.String(20), nullable=False)
    adult = db.Column(db.String(10), nullable=False)
    child = db.Column(db.String(10), nullable=False)

class Booking(db.Model):
    __tablename__ = "booking"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    check_out = db.Column(db.String(20), nullable=False)
    check_in = db.Column(db.String(20), nullable=False)
    adult = db.Column(db.String(10), nullable=False)
    child = db.Column(db.String(10), nullable=False)
    room = db.Column(db.String(10), nullable=False)
    special_request = db.Column(db.String(250))

# with app.app_context():
#     db.create_all()

@app.route('/', methods=["GET", "POST"])
def home():
    if request.method == "POST":
        with app.app_context():
            new_hotel = Hotel(
                check_out = request.form['check_out'],
                check_in = request.form['check_in'],
                adult = request.form['adult'],
                child = request.form['child']
            )
            db.session.add(new_hotel)
            db.session.commit()
            return redirect(url_for('home'))
    return render_template('home.html')

@app.route('/rooms', methods=["GET", "POST"])
def rooms():
    if request.method == "POST":
        with app.app_context():
            new_hotel = Hotel(
                check_out = request.form['check_out'],
                check_in = request.form['check_in'],
                adult = request.form['adult'],
                child = request.form['child']
            )
            db.session.add(new_hotel)
            db.session.commit()
            return redirect(url_for('home'))
    return render_template('rooms.html')

@app.route('/booking', methods=["GET", "POST"])
def booking():
    if request.method == "POST":
        with app.app_context():
            new_booking = Booking(
                name = request.form['name'],
                email = request.form['email'],
                check_out = request.form['check_out'],
                check_in = request.form['check_in'],
                adult = request.form['adult'],
                child = request.form['child'],
                room = request.form['room'],
                special_request = request.form['special_request']
            )
            db.session.add(new_booking)
            db.session.commit()
            return redirect(url_for('home'))

    return render_template('booking.html')


if __name__ == "__main__":
    app.run(port=5000, debug=True)
