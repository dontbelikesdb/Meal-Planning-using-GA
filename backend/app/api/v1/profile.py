from typing import Any, Dict

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api import dependencies as deps
from app.db.session import get_db
from app.models.profile import UserProfile
from app.models.user import User
from app.schemas.user import ProfileUpdate

router = APIRouter()

@router.post("/", response_model=Dict[str, Any])
def save_profile(
    payload: ProfileUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Dict[str, Any]:
    profile = (
        db.query(UserProfile).filter(UserProfile.user_id == current_user.id).first()
    )
    if profile is None:
        profile = UserProfile(user_id=current_user.id)
        db.add(profile)

    update_data = payload.dict(exclude_unset=True)
    for field, value in update_data.items():
        if hasattr(profile, field):
            setattr(profile, field, value)

    db.commit()
    db.refresh(profile)
    return {"message": "profile saved", "user_id": current_user.id, "profile_id": profile.id}
