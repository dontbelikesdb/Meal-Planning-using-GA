from fastapi import FastAPI
from .routers import auth_router, healthcheck

app = FastAPI(title="Diet Recommendation Backend", version="1.0")

app.include_router(auth_router.router, prefix="/auth", tags=["Auth"])
app.include_router(healthcheck.router, prefix="/health", tags=["Health"])

@app.get("/")
def home():
    return {"message": "Backend running successfully!"}
