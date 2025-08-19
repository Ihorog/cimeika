from fastapi import FastAPI
from app.routes.story import router as story_router
from app.routes.gallery import router as gallery_router
from app.routes.weights import router as weights_router
from app.routes.events import router as events_router
from app.routes.telemetry import router as telemetry_router

app = FastAPI()

@app.get("/health")
async def health_check():
    return {"status": "ok"}

app.include_router(story_router)
app.include_router(gallery_router)
app.include_router(weights_router)
app.include_router(events_router)
app.include_router(telemetry_router)
