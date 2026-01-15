from fastapi import APIRouter

from app.api.endpoints import auth, users
from app.api.v1 import plan, profile

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(profile.router, prefix="/profile", tags=["profile"])
api_router.include_router(plan.router, prefix="/plan", tags=["plan"])
