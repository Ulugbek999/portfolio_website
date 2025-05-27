from flask import Flask, request, redirect
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv
import os

load_dotenv()

EMAIL_USER = os.getenv("MAIL_USERNAME")
EMAIL_PASS = os.getenv("MAIL_PASSWORD")


app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')

@app.route('/<path:filename>', methods=['GET'])
def static_files(filename):
    return app.send_static_file(filename)

@app.route("/send_email", methods=["POST"])
def send_email():
    name    = request.form["name"]
    email   = request.form["email"]
    message = request.form["message"]

    msg = EmailMessage()
    msg["Subject"] = f"📬 New message from {name}"
    msg["From"]    = EMAIL_USER
    msg["To"]      = EMAIL_USER
    msg["Reply-To"] = email
    msg.set_content(f"From: {name} <{email}>\n\n{message}")

    with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
        smtp.starttls()
        smtp.login(EMAIL_USER, EMAIL_PASS)
        smtp.send_message(msg)

    return redirect("/thank-you.html")

if __name__ == "__main__":
    app.run(debug=True)
