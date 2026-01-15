"""Re-export commonly-used FastAPI dependency functions.
 
 This module exists as a convenience import layer.
 """
from app.api.dependencies import (  # noqa: F401
    reusable_oauth2,
    get_current_user,
    get_current_active_user,
    get_current_active_superuser,
)

__all__ = [
    "reusable_oauth2",
    "get_current_user",
    "get_current_active_user",
    "get_current_active_superuser",
]