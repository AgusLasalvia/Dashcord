from pydantic import BaseModel
from typing import List


class Playlist(BaseModel):
    name:str
    cover: str

class PlaylistList(BaseModel):
    _id: str
    user_id: str
    songs: List[Playlist]
