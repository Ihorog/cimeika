from fastapi import APIRouter, HTTPException
import logging
import os
from datetime import datetime
import requests

router = APIRouter()

logger = logging.getLogger(__name__)

@router.get("/data/weather")
async def get_weather():
    api_key = os.getenv("OPENWEATHERMAP_API_KEY")
    if not api_key:
        logger.error("OPENWEATHERMAP_API_KEY is not set")
        raise HTTPException(status_code=500, detail="OPENWEATHERMAP_API_KEY is not set")
    city = "London"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        logger.info(f"Weather data fetched successfully: {data}")
        return data
    except requests.RequestException as e:
        logger.error(f"Error fetching weather data: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch weather data")

@router.get("/data/time")
async def get_time():
    try:
        now = datetime.utcnow()
        logger.info(f"Current time fetched successfully: {now}")
        return {"time": now.isoformat()}
    except Exception as e:
        logger.error(f"Error fetching current time: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch current time")

@router.get("/data/astrology")
async def get_astrology():
    api_key = os.getenv("FREEASTROLOGYAPI_API_KEY")
    if not api_key:
        logger.error("FREEASTROLOGYAPI_API_KEY is not set")
        raise HTTPException(status_code=500, detail="FREEASTROLOGYAPI_API_KEY is not set")
    sign = "aries"
    url = f"https://api.freeastrologyapi.com/forecast?sign={sign}&apikey={api_key}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        logger.info(f"Astrology data fetched successfully: {data}")
        return data
    except requests.RequestException as e:
        logger.error(f"Error fetching astrology data: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch astrology data")

@router.get("/data/health")
async def get_health():
    api_key = os.getenv("HEALTH_API_KEY")
    if not api_key:
        logger.error("HEALTH_API_KEY is not set")
        raise HTTPException(status_code=500, detail="HEALTH_API_KEY is not set")
    url = f"https://api.healthdataapi.com/health?apikey={api_key}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        logger.info(f"Health data fetched successfully: {data}")
        return data
    except requests.RequestException as e:
        logger.error(f"Error fetching health data: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch health data")

@router.post("/telemetry")
async def collect_telemetry(payload: dict):
    logger.info(f"Telemetry collected: {payload}")
    return {"status": "ok"}
