from fastapi import Request, HTTPException
from core.security import web_token


def get_current_user(request: Request):
    auth_header = request.headers.get("Authorization")

    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401)

    token = auth_header.replace("Bearer", "")
    return web_token.verify_token(token)
