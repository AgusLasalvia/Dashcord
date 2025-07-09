import envConfig from "../config/envConfig";
import { saveToken } from "./token";
import axios from "axios";

const form = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

loginBtn?.addEventListener("click", async () => {

	const formData = new FormData(form as HTMLFormElement);

	console.log("Username:", formData.get("username"));
	console.log("Password:", formData.get("password"));

	const res = await login(
		formData.get("username") as string,
		formData.get("password") as string,
	);
});

export async function login(username: string, password: string) {
	try {
		const res = await axios.post(envConfig.apiURL + "/auth/login", {
			username,
			password,
		});
		const data = res.data;
		console.log(data.data);
		const token = data.data.token;
		saveToken(token);
		window.location.href = "/playlists"
		return { token };

	} catch (error: any) {
		if (error.response && error.response.data) {
			return { error: error.response.data.error || "Error de red o servidor" };
		}
		return { error: "Error de red o servidor" };
	}
}