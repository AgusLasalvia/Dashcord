from database import db
from bson import ObjectId
from models import Playlist
from typing import Optional


async def get_all_playlists():
    playlists = await db.playlist_collection.find({}).to_list()
    return [await fix_mongo_id(p) for p in playlists]


async def get_playlist_by_id(id: str):
    playlist = await db.playlist_collection.find_one({
        "_id": ObjectId(id)
    })

    return await fix_mongo_id(playlist)


async def create_new_playlist(playlist: Playlist):
    create = await db.playlist_collection.insert_one({
        "name": playlist.name,
        "cover": playlist.cover,
        "songs": []
    })

    result = await get_playlist_by_id(str(create.inserted_id))
    return result




async def fix_mongo_id(doc: Optional[dict]) -> Optional[dict]:
    if doc and "_id" in doc:
        doc["_id"] = str(doc["_id"])
    return doc
