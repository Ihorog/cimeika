from flask import Flask, jsonify
import requests
import os
import logging

app = Flask(__name__)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route('/')
def home():
    return "Welcome to the Cimeika API!"

@app.route('/data/weather')
def get_weather():
    api_key = os.getenv("OPENWEATHERMAP_API_KEY")
    city = "London"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        logger.info(f"Weather data fetched successfully: {data}")
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        logger.error(f"Error fetching weather data: {e}")
        return jsonify({"error": "Failed to fetch weather data"}), 500

@app.route('/data/time')
def get_time():
    from datetime import datetime
    try:
        now = datetime.utcnow()
        logger.info(f"Current time fetched successfully: {now}")
        return jsonify({"time": now.isoformat()})
    except Exception as e:
        logger.error(f"Error fetching current time: {e}")
        return jsonify({"error": "Failed to fetch current time"}), 500

@app.route('/data/astrology')
def get_astrology():
    api_key = os.getenv("FREEASTROLOGYAPI_API_KEY")
    sign = "aries"
    url = f"https://api.freeastrologyapi.com/forecast?sign={sign}&apikey={api_key}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        logger.info(f"Astrology data fetched successfully: {data}")
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        logger.error(f"Error fetching astrology data: {e}")
        return jsonify({"error": "Failed to fetch astrology data"}), 500

@app.route('/data/health')
def get_health():
    api_key = os.getenv("HEALTH_API_KEY")
    url = f"https://api.healthdataapi.com/health?apikey={api_key}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        logger.info(f"Health data fetched successfully: {data}")
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        logger.error(f"Error fetching health data: {e}")
        return jsonify({"error": "Failed to fetch health data"}), 500

if __name__ == '__main__':
    port = int(os.getenv("PORT", 8000))
    app.run(host='0.0.0.0', port=port)
