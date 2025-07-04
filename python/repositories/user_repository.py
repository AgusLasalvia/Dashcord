from database.mongo_database import db


async def login(username: str, password: str):
    user = db.user_collection.find_one({
        "username": username,
        "password": password
    })

    return user
