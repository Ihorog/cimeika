import json
import logging
import os
from pathlib import Path

logger = logging.getLogger(__name__)

_API_KEYS_PATH = Path(__file__).resolve().parent.parent / 'api_keys.json'

def resolve_secret(key: str):
    """Resolve a secret from environment variables or api_keys.json.

    Args:
        key: Name of the secret.
    Returns:
        The secret value as a string or None if not found.
    """
    if value := os.getenv(key):
        return value

    # Then check api_keys.json if it exists
    if _API_KEYS_PATH.exists():
        try:
            with _API_KEYS_PATH.open() as f:
                data = json.load(f)
            return data.get(key)
        except Exception as e:
            logger.debug(f"Failed reading {_API_KEYS_PATH}: {e}")
    return None
