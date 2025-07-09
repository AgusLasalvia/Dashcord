import axios from "axios"

export const login = async (username: string, password: string) => {
	const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
		username,
		password
	})

	return response.data
}