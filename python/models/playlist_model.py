from pydantic import BaseModel
from typing import List


class Playlist(BaseModel):
    _id: str
    cover: str
    youtube_url: str


class PlaylistList(BaseModel):
    _id: str
    user_id: str
    songs: List[Playlist]
