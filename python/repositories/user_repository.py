from database import db
from bson import ObjectId


async def login(username: str, password: str):
    user = await db.user_collection.find_one({
        "username": username,
        "password": password
    })
    print(user)
    return user


async def get_user_by_id(id: str):
    user = db.user_collection.find_one({
        "_id": ObjectId(id)
    })

    return user
