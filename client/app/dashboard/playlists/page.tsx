"use client"

import { getToken } from '@/lib/token';
import './page.css'
import PlaylistCard from '@/components/PlaylistCard/PlaylistCard';

const username = "Usuario";
const playlistList = [
	{
		title: "Blinding Lights",
		youtubeID: "4NRXx6U8ABQ",
		created: "Agus",
	},
	{
		title: "Shape of You",
		youtubeID: "JGwWNGJdvx8",
		created: "Seba",
	},
	{
		title: "Levitating",
		youtubeID: "TUVcZfQe-Kw",
		created: "Agus",
	},
	{
		title: "Dance Monkey",
		youtubeID: "q0hyYWKXF0Q",
		created: "Agus",
	},
	{
		title: "Uptown Funk",
		youtubeID: "OPf0YbXqDm0",
		created: "Seba",
	},
	{
		title: "Despacito",
		youtubeID: "kJQP7kiw5Fk",
		created: "Seba",
	},
	{
		title: "Bad Guy",
		youtubeID: "DyDfgMOUjCI",
		created: "Meli",
	},
	{
		title: "Señorita",
		youtubeID: "Pkh8UtuejGw",
		created: "Agus",
	},
	{
		title: "Old Town Road",
		youtubeID: "r7qovpFAGrQ",
		created: "Seba",
	},
	{
		title: "Sunflower",
		youtubeID: "ApXoWvfEYVU",
		created: "Meli",
	},
	{
		title: "Happier",
		youtubeID: "m7Bc3pLyij0",
		created: "Agus",
	},
	{
		title: "Rockstar",
		youtubeID: "UceaB4D0jpo",
		created: "Seba",
	},
	{
		title: "Closer",
		youtubeID: "PT2_F-1esPk",
		created: "Meli",
	},
	{
		title: "Believer",
		youtubeID: "7wtfhZwyrcc",
		created: "Agus",
	},
	{
		title: "Faded",
		youtubeID: "60ItHLz5WEA",
		created: "Seba",
	},
	{
		title: "Stressed Out",
		youtubeID: "pXRviuL6vMY",
		created: "Meli",
	},
];


export default function Page() {
	return (<>
		<header className="dashboard-header">
			<span>Bienvenido, {username}</span>
		</header>
		<section className="music-list-section">
			<div className="music-list-header">
				<h2>Playlists</h2>
				<input
					type="text"
					id="search-bar"
					className="search-bar"
					placeholder="Search playlist by name..."
					list="playlist-names"
				/>
				<datalist id="playlist-names">
					{playlistList.map((playlist, index) => <option key={index} value={playlist.title} />)}
				</datalist>
			</div>
			<div className="music-grid" id="music-grid">
				{
					playlistList.length > 0 ? (
						playlistList.map((playlist: any, index) => (
							<PlaylistCard
								title={playlist.title}
								created={playlist.created}
								youtubeID={playlist.youtubeID}
								key={index}
							/>
						))
					) : (
						<div className="song-card empty">No playlist found with that name.</div>
					)
				}
			</div>
		</section>
	</>
	)
}