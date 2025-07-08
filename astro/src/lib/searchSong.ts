import axios from "axios"
import envConfig from "../config/envConfig"
import { getToken } from "./auth"

export default async function searchSong(query: string) {
	const response = await axios.get(envConfig.apiURL + `/songs/search`,
		{
			headers: {
				Authorization: `Bearer ${getToken()}`
			},
			params: { q: query }
		}
	);
	return response.data;
}