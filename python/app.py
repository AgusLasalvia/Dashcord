from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from core import *
from routes import *

app = FastAPI()

app.include_router(auth_router, prefix='/api/auth', tags=['Auth'])
app.include_router(playlist_router, prefix="/api/playlist", tags=['Playlist'])


# TODO: make a token check or a global check function
