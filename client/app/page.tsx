"use client"
import "./page.css"
import { login } from "@/lib/auth"
import { saveToken } from "@/lib/token"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function Page() {
	const router = useRouter()
	const [form, setForm] = useState({
		username: "",
		password: ""
	})

	const handleLogin = async () => {
		const response = await login(form.username, form.password);
		console.log(response)
		if (response) {
			saveToken(response.token)
			router.push('/dashboard/playlists')
		}
	}

	return (
		<div className="login-container">
			<form className="login-form">
				<i className="bi bi-person-fill"></i>
				<h2>Log In</h2>
				<div className="input-group">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" name="username" required
						onChange={(e) => {
							setForm({ ...form, username: e.target.value })
						}}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" required
						onChange={(e) => {
							setForm({ ...form, password: e.target.value })
						}} />
				</div>
				<input type="button" value="Entrar" id="loginBtn" onClick={handleLogin} />
			</form>
		</div>
	)
}