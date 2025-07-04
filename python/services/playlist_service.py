from repositories import playlist_repository as pr


async def get_all_playlists():
    return await pr.get_all_playlists()


async def get_playlist_by_id(id: str):
    return await pr.get_playlist_by_id(id)


async def create_new_playlist(playlist):
    return await pr.create_new_playlist(playlist)
