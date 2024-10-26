from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Cimeika API!"

@app.route('/data/weather')
def get_weather():
    api_key = "0dd0656884eea8329f4f432cc0bc8010"
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
    api_key = "SI4I4N5GJ32gRX5iSL1Qea4TqgDtIy8o9RyvDfxW"
    sign = "aries"
    url = f"https://api.freeastrologyapi.com/forecast?sign={sign}&apikey={api_key}"
    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch astrology data"}), response.status_code
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
