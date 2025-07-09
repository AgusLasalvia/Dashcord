"use client"
import { useEffect } from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import "./page.css"
import { searchSong } from "@/lib/songs"
import SongCard from "@/components/SongCard/SongCard"

export default function Page() {
	const [search, setSearch] = useState("")

	const [songs, setSongs] = useState<any[]>([])
	const searchParams = useSearchParams()
	const router = useRouter()

	console.log(songs)
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault()
		if (search.trim()) {
			router.push(`?q=${encodeURIComponent(search)}`)
		}
	}

	useEffect(() => {
		const query = searchParams.get("q")
		if (query) {
			const fetchSongs = async () => {
				try {
					let data = await searchSong(query)
					setSongs(data)
				} catch (err) {
					console.error("Error al buscar canciones", err)
				}
			}
			fetchSongs()
		}
	}, [searchParams])

	return (
		<>
			<header className="dashboard-header">
				<span>Buscar Canción</span>
			</header>
			<section className="music-list-section">
				<form className="search-form">
					<input
						id="search"
						type="text"
						name="q"
						className="search-bar"
						placeholder="Buscar canción o artista..."
						required
						onChange={(e) => {
							setSearch(e.target.value)
						}}
					/>
					<button type="submit" className="search-btn" onClick={handleSearch}><i className="bi bi-search"></i> Buscar</button>
				</form>
				<div className="music-grid" id="grid">
					{
						songs.map((song: any, index) => (
							<SongCard title={song.title} youtube_id={song.id} artist={song["cannel"]} key={index} />
						))
					}
				</div>
			</section></>
	)
}