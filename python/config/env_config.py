import os
from dotenv import load_dotenv

load_dotenv()

def get_secret_key() -> str:
    secret_key = os.getenv("SESSION_SECRET_KEY")
    if not secret_key:
        raise ValueError("No secret key set")
    return secret_key


def get_database_uri() -> str:
		database_uri = os.getenv("DATABASE_URI")
		if not database_uri:
				raise ValueError("No database URI set")
		return database_uri