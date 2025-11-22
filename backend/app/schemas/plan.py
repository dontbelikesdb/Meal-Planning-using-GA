from pydantic import BaseModel

class PlanRequest(BaseModel):
    user_id: int
    days: int = 1
