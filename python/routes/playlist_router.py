from fastapi import Depends, APIRouter, Request
from utils import get_current_user

router = APIRouter()


@router.get("/all")
async def get_all_playlists(current_user: dict = Depends(get_current_user)):
    pass
