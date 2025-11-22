from fastapi import FastAPI
from app.api.v1 import profile, plan

app = FastAPI(title="Meal Planner Backend")

app.include_router(profile.router, prefix="/api/v1")
app.include_router(plan.router, prefix="/api/v1")

@app.get("/")
def root():
    return {"message": "Backend running"}
