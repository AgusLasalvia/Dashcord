from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from database.mongo_database import db
from core import *

app = FastAPI()


##############################
# Forms "interfaces"
##############################

class LoginRequest(BaseModel):
    username: str
    password: str


class NewPlaylist(BaseModel):
    user_id: str
    playlist_name: str


##############################
# User Routes
##############################
@app.post('/login')
async def login(login_req: LoginRequest):
    if login_req.username == 'admin' and login_req.password == 'password':
        token = web_token.create_token(login_req.username)
        return {"token": token}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")


#############################
# Playlist Routes
#############################

@app.get('/playlists')
async def get_all_playlists():

    playlists = db.get_all_playlists()
    for playlist in playlists:
        if '_id' in playlist:
            playlist['_id'] = str(playlist['_id'])
    return {"playlists": playlists}


@app.post("/playlist")
async def new_playlist(body: NewPlaylist):
    playlist_id = db.create_playlist(body.user_id, body.playlist_name)
    return {"message": "Playlist creada", "playlist_id": playlist_id}

 # TODO: make a token check or a global check function
