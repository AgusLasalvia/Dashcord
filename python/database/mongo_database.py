from pymongo import MongoClient
from core.config import get_mongo_url


class MongoDatabase:
    def __init__(self):
        mongo_url: str = get_mongo_url()
        self.client = MongoClient(mongo_url)
        self.db = self.client["dashcord"]
        self.playlist_collection = self.db["playlists"]
        self.user_collection = self.db["users"]

    def create_playlist(self, user_id: str, playlist_name: str):
        playlist_data = {
            "user_id": user_id,
            "playlist_name": playlist_name,
            "songs": []
        }
        self.playlist_collection.insert_one(playlist_data)

    def get_playlist_collection_by_user_id(self, user_id: str):
        return self.playlist_collection.find({"user_id": user_id})

    def add_song_to_playlist(self, user_id: str, playlist_id: str, song_data: dict):
        self.playlist_collection.update_one(
            {"user_id": user_id, "playlist_id": playlist_id},
            {"$push": {"songs": song_data}},
            upsert=True
        )

    def remove_song_from_playlist(self, user_id: str, playlist_id: str, song_id: str):
        self.playlist_collection.update_one(
            {"user_id": user_id, "playlist_id": playlist_id},
            {"$pull": {"songs": {"id": song_id}}}
        )

    def get_all_playlists(self):
        return list(self.playlist_collection.find({}))

    def test_connection(self):
        try:
            self.client.admin.command('ping')
            print("Conection established successfuly with the database.")
            return True
        except Exception as e:
            print(f"Error al conectar a MongoDB: {e}")
            return False


db = MongoDatabase()
