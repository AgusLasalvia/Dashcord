from fastapi import APIRouter, HTTPException
from services import auth_service as auth
from core.security import web_token
from models.auth_model import *

router = APIRouter()


@router.post('/login')
async def login(login_req: LoginRequest, response_model=list[LoginReponse]):

		if login_req.username == 'admin' and login_req.password == 'password':
				response = await auth.login(login_req.username, login_req.password)
				return {"data": response}, 200
		
		else:
				raise HTTPException(status_code=401, detail="Invalid credentials")
