"use client";
import { Suspense } from "react";
import { searchSong } from "@/lib/songs";
import SongCard from "@/components/SongCard/SongCard";
import "./page.css";

function Page() {
	return (
		<>
			<header className="dashboard-header">
				<span>Buscar Canción</span>
			</header>
			<Suspense fallback={<div>Cargando canciones...</div>}>
				<SongsClient />
			</Suspense>
		</>
	);
}

export default Page;

// 👇 Componente cliente interno

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function SongsClient() {
	const [search, setSearch] = useState("");
	const [songs, setSongs] = useState<any[]>([]);
	const searchParams = useSearchParams();
	const router = useRouter();

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (search.trim()) {
			router.push(`?q=${encodeURIComponent(search)}`);
		}
	};

	useEffect(() => {
		const query = searchParams.get("q");
		if (query) {
			const fetchSongs = async () => {
				try {
					const data = await searchSong(query);
					setSongs(data);
				} catch (err) {
					console.error("Error al buscar canciones", err);
				}
			};
			fetchSongs();
		}
	}, [searchParams]);

	return (
		<section className="music-list-section">
			<form className="search-form" onSubmit={handleSearch}>
				<input
					id="search"
					type="text"
					name="q"
					className="search-bar"
					placeholder="Buscar canción o artista..."
					required
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit" className="search-btn">
					<i className="bi bi-search"></i> Buscar
				</button>
			</form>
			<div className="music-grid" id="grid">
				{songs.map((song, index) => (
					<SongCard
						key={index}
						title={song.title}
						youtube_id={song.id}
						artist={song["cannel"]}
					/>
				))}
			</div>
		</section>
	);
}
