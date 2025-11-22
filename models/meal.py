from pydantic import BaseModel
from typing import List

class Meal(BaseModel):
    name: str
    ingredients: List[str]
    calories: float
    protein: float
    carbs: float
    fat: float
