from fastapi import FastAPI
from routes import *

app = FastAPI()

app.include_router(auth_router, prefix='/api/auth', tags=['Auth'])
app.include_router(playlist_router, prefix="/api/playlists", tags=['Playlist'])
app.include_router(song_router, prefix="/api/songs", tags=["Song"])
