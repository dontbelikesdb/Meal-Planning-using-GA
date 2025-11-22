import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://postgres:password@localhost/dietdb")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "supersecretkey")

settings = Settings()
