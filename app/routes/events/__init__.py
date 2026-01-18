from fastapi import APIRouter, HTTPException
import logging
import os
import requests

router = APIRouter()

logger = logging.getLogger(__name__)

@router.post("/events/notify")
async def create_event(event_data: dict):
    api_key = os.getenv("GOOGLE_CALENDAR_API_KEY")
    if not api_key:
        logger.error("GOOGLE_CALENDAR_API_KEY is not set")
        raise HTTPException(status_code=500, detail="GOOGLE_CALENDAR_API_KEY is not set")
    url = f"https://www.googleapis.com/calendar/v3/calendars/primary/events?key={api_key}"
    try:
        response = requests.post(url, json=event_data)
        response.raise_for_status()
        data = response.json()
        logger.info(f"Event created successfully: {data}")
        return data
    except requests.RequestException as e:
        logger.error(f"Error creating event: {e}")
        raise HTTPException(status_code=500, detail="Failed to create event")
