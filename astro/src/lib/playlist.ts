import axios from "axios";
import envConfig from "../config/envConfig";
import { getToken } from "./token";

export const createPlaylist = async (name: string) => {
	const response = await axios.post(envConfig.apiURL + "/playlists/create", name, {
		headers: {
			Authorization: "Bearer " + getToken()
		}
	})
	return response.data
}

export const deletePlaylists = async (id: string) => {
	const response = await axios.delete(envConfig.apiURL + "/playlists/delete", {
		headers: {
			Authorization: "Bearer " + getToken()
		}
	})

	return response.data
}