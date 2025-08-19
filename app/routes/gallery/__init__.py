from fastapi import APIRouter, HTTPException
import logging
import os
import requests

router = APIRouter()

logger = logging.getLogger(__name__)

@router.get("/gallery/feed")
async def gallery_feed():
    # Placeholder implementation
    return {"images": []}

@router.post("/gallery/creative")
async def upload_creative_work(creative_data: dict):
    api_key = os.getenv("DROPBOX_API_KEY")
    if not api_key:
        logger.error("DROPBOX_API_KEY is not set")
        raise HTTPException(status_code=500, detail="DROPBOX_API_KEY is not set")
    url = "https://content.dropboxapi.com/2/files/upload"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Dropbox-API-Arg": "{\"path\": \"/creative_works/file.jpg\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}",
        "Content-Type": "application/octet-stream",
    }
    try:
        response = requests.post(url, data=creative_data, headers=headers)
        response.raise_for_status()
        data = response.json()
        logger.info(f"Creative work uploaded successfully: {data}")
        return data
    except requests.RequestException as e:
        logger.error(f"Error uploading creative work: {e}")
        raise HTTPException(status_code=500, detail="Failed to upload creative work")
