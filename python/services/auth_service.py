from models.auth_model import *
from repositories import user_repository as ur
from utils import mongo_to_list
from core import web_token


async def login(username: str, password: str) -> LoginReponse:
    user = ur.login(username, password)
    print(user)
    if user is not None:
        token = web_token.create_token(username)
        return LoginReponse(token=token)
    return LoginReponse(token="")
