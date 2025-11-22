from fastapi import APIRouter
from app.schemas.user import ProfileIn
from app.models.user import create_user_profile

router = APIRouter()

@router.post("/profile")
def save_profile(payload: ProfileIn):
    user_id = create_user_profile(payload)
    return {"message": "profile saved", "user_id": user_id}
