from youtubesearchpython import VideosSearch
from typing import Optional, Dict, Any, Union


async def search_video_urls(filter_text: str, limit: int = 10) -> Optional[Union[Dict[str, Any], str]]:

    try:
        search_result = VideosSearch(filter_text.strip(), limit=limit).result()

        if isinstance(search_result, dict):
            return search_result
        elif isinstance(search_result, str):
            return search_result
        else:
            print(f"Tipo de resultado inesperado: {type(search_result)}")
            return None

    except ValueError as e:
        print(f"Error de validación en search_video_urls: {e}")
        return None
    except Exception as e:
        print(f"Error inesperado en search_video_urls: {e}")
        return None
