import os
from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Cimeika API!"

@app.route('/data/weather')
def get_weather():
    api_key = os.getenv('OPENWEATHERMAP_API_KEY')
    city = "London"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch weather data"}), response.status_code
    data = response.json()
    return jsonify(data)

@app.route('/data/time')
def get_time():
    from datetime import datetime
    now = datetime.utcnow()
    return jsonify({"time": now.isoformat()})

@app.route('/data/astrology')
def get_astrology():
    api_key = os.getenv('FREEASTROLOGYAPI_API_KEY')
    sign = "aries"
    url = f"https://api.freeastrologyapi.com/forecast?sign={sign}&apikey={api_key}"
    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch astrology data"}), response.status_code
    data = response.json()
    return jsonify(data)

@app.route('/components/verify')
def verify_components():
    # Placeholder logic for verifying component dependencies
    dependencies_verified = True
    return jsonify({"dependencies_verified": dependencies_verified})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
