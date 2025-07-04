from fastapi import Depends, APIRouter
from services import playlist_service as service
from models import Playlist
from utils import get_current_user

router = APIRouter()


@router.get("/all")
async def get_all_playlists(current_user: dict = Depends(get_current_user)):
    playlists = await service.get_all_playlists()
    return {"playlists": playlists}, 200


@router.get("/playlist")
async def get_playlist_by_id(id: str, current_user: dict = Depends(get_current_user)):
    playlist = await service.get_playlist_by_id(id)
    return {"playlist": playlist}, 200


@router.post("/new")
async def create_new_playlist(playlist_req: Playlist, current_user: dict = Depends(get_current_user)):
    playlist_created = await service.create_new_playlist(playlist_req)
    return {"playlist": playlist_created}
