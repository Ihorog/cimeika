import os
from flask import Flask, jsonify, request
import requests
import logging
from flask_caching import Cache

app = Flask(__name__)

# Configure caching
cache = Cache(app, config={'CACHE_TYPE': 'simple', 'CACHE_DEFAULT_TIMEOUT': 600})

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def cache_response(func):
    def wrapper(*args, **kwargs):
        cache_key = f"{func.__name__}_{args}_{kwargs}"
        cached_response = cache.get(cache_key)
        if cached_response:
            return cached_response
        response = func(*args, **kwargs)
        cache.set(cache_key, response)
        return response
    return wrapper

@app.route('/')
def home():
    return "Welcome to the Cimeika API!"

@app.route('/data/weather')
@cache_response
def get_weather():
    api_key = os.getenv('OPENWEATHERMAP_API_KEY')
    city = "London"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    response = requests.get(url)
    if response.status_code != 200:
        logger.error("Failed to fetch weather data")
        return jsonify({"error": "Failed to fetch weather data"}), response.status_code
    data = response.json()
    logger.info("Weather data fetched successfully")
    return jsonify(data)

@app.route('/data/time')
def get_time():
    from datetime import datetime
    now = datetime.utcnow()
    return jsonify({"time": now.isoformat()})

@app.route('/data/astrology')
@cache_response
def get_astrology():
    api_key = os.getenv('FREEASTROLOGYAPI_API_KEY')
    sign = "aries"
    url = f"https://api.freeastrologyapi.com/forecast?sign={sign}&apikey={api_key}"
    response = requests.get(url)
    if response.status_code != 200:
        logger.error("Failed to fetch astrology data")
        return jsonify({"error": "Failed to fetch astrology data"}), response.status_code
    data = response.json()
    logger.info("Astrology data fetched successfully")
    return jsonify(data)

@app.route('/components/verify')
def verify_components():
    # Placeholder logic for verifying component dependencies
    dependencies_verified = True
    return jsonify({"dependencies_verified": dependencies_verified})

@app.route('/data/log', methods=['POST'])
def log_data():
    data = request.get_json()
    data_id = data.get('dataId')
    log_details = data.get('logDetails')
    if not data_id or not log_details:
        logger.error("Invalid log data")
        return jsonify({"error": "Invalid log data"}), 400
    logger.info(f"Data logged successfully: {data_id}, {log_details}")
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
