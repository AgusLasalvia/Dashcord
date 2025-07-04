from pydantic import BaseModel

# GET Model

# POST model


class LoginRequest(BaseModel):
    username: str
    password: str


class LoginReponse(BaseModel):
    token: str
