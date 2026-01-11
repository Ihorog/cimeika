from fastapi import APIRouter
import logging

router = APIRouter()

logger = logging.getLogger(__name__)

@router.post("/story/scene")
async def create_scene(scene: dict):
    logger.info(f"Scene received: {scene}")
    return {"status": "created", "scene": scene}
