from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from database.mongo_database import db
from core import *
from routes import *

app = FastAPI()

app.include_router(auth_router, prefix='/api/auth', tags=['Auth'])

@app.get('/playlists')
async def get_all_playlists():

    playlists = db.get_all_playlists()
    for playlist in playlists:
        if '_id' in playlist:
            playlist['_id'] = str(playlist['_id'])
    return {"playlists": playlists}



 # TODO: make a token check or a global check function
