from fastapi import APIRouter, Depends
from services import song_service as service
from utils import get_current_user
router = APIRouter()


@router.get('/search')
async def search(filter: str, current_user: dict = Depends(get_current_user)):
    result = await service.search_video_urls(filter)
    return result, 200
