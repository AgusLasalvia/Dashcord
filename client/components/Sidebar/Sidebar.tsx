"use client"
import "./Sidebar.css"
import Link from "next/link"
export default function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="sidebar-content">
				<div>
					<div className="sidebar-title">
						<i className="bi bi-disc-fill sidebar-logo"></i>
					</div>
					<nav className="sidebar-nav">
						<Link
							href="/dashboard/playlists"
							className={`sidebar-link`}
						><i className="bi bi-music-note-list"></i> <span>Playlists</span></Link>
						<Link
							href="/dashboard/profile"
							className={`sidebar-link`}
						><i className="bi bi-person"></i> <span>Perfil</span></Link>
						<Link
							href="/dashboard/songs"
							className={`sidebar-link`}
						><i className="bi bi-search"></i> <span>Buscar Canción</span></Link>
						<Link
							href="#"
							className={`sidebar-link`}
						><i className="bi bi-gear"></i> <span>Ajustes</span></Link>
					</nav>
				</div>
				<a href="/logout" className="sidebar-link sidebar-logout">
					<i className="bi bi-box-arrow-right"></i>
					<span>Logout</span>
				</a>
			</div>
		</aside>
	)
}