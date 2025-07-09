import axios from "axios";
import envConfig from "../config/envConfig";
import { getToken } from "./token";

export let songs = ["a"]

const q = new URLSearchParams(window.location.search).get('q');




// export const searchSong = async (filter: string) => {
// 	const response = await axios.get(envConfig.apiURL + "/songs/search", {
// 		headers: {
// 			Authorization: "Bearer " + getToken()
// 		},
// 		params: { q: filter }
// 	})

// 	return response.data
// };


// if (q) {

// 	songs = await searchSong(q)

// }