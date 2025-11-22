from pydantic import BaseModel

class ProfileIn(BaseModel):
    name: str
    age: int
    height_cm: float
    weight_kg: float
    allergies: list[str]
