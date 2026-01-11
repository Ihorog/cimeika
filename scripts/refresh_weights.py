import argparse
import json
import logging
from datetime import datetime, timezone
from pathlib import Path

LOG_PATH = Path(__file__).resolve().parent.parent / "logs" / "pipeline.log"

def setup_logger() -> logging.Logger:
    """Configure logging to stdout and file in JSON lines."""
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    logger = logging.getLogger("refresh_pipeline")
    logger.setLevel(logging.INFO)
    formatter = logging.Formatter('%(message)s')
    file_handler = logging.FileHandler(LOG_PATH)
    file_handler.setFormatter(formatter)
    stream_handler = logging.StreamHandler()
    stream_handler.setFormatter(formatter)
    if not logger.handlers:
        logger.addHandler(file_handler)
        logger.addHandler(stream_handler)
    return logger

logger = setup_logger()

DRY_RUN = False


def log_event(event: str, **extra) -> None:
    """Log a single event as JSON."""
    payload = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "event": event,
        "dry_run": DRY_RUN,
    }
    if extra:
        payload.update(extra)
    logger.info(json.dumps(payload))


def refresh_data() -> dict:
    """Placeholder for data refresh step."""
    status = "skipped" if DRY_RUN else "completed"
    log_event("refresh_data", status=status)
    return {"status": status}


def recompute_weights() -> dict:
    """Placeholder for recomputing weights."""
    status = "skipped" if DRY_RUN else "completed"
    log_event("recompute_weights", status=status)
    return {"status": status}


def boost_anomalies() -> dict:
    """Placeholder for anomaly boosting."""
    status = "skipped" if DRY_RUN else "completed"
    log_event("boost_anomalies", status=status)
    return {"status": status}


def update_gallery_feed() -> dict:
    """Placeholder for gallery feed update."""
    status = "skipped" if DRY_RUN else "completed"
    log_event("update_gallery_feed", status=status)
    return {"status": status}


def main() -> None:
    parser = argparse.ArgumentParser(description="Refresh weights pipeline")
    parser.add_argument("--dry-run", action="store_true", help="Run without side effects")
    args = parser.parse_args()
    global DRY_RUN
    DRY_RUN = args.dry_run
    log_event("pipeline_start")
    results = {
        "refresh_data": refresh_data(),
        "recompute_weights": recompute_weights(),
        "boost_anomalies": boost_anomalies(),
        "update_gallery_feed": update_gallery_feed(),
    }
    log_event("pipeline_end", results=results)


if __name__ == "__main__":
    main()
