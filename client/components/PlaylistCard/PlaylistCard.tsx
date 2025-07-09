import Link from "next/link"
import "./PlaylistCard.css"
interface PlaylistCardProp {
	title: string,
	created: string,
	youtubeID: string
}


export default function PlaylistCard(props: PlaylistCardProp) {

	const youtubeLink = `https://www.youtube.com/watch?v=${props.youtubeID}`;
	const coverUrl = `https://img.youtube.com/vi/${props.youtubeID}/hqdefault.jpg`;
	const creatorInitial = props.created ? props.created[0].toUpperCase() : "?";

	return (

		<Link
			className="playlist-card-redesign"
			href={youtubeLink}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="cover-container">
				<img className="playlist-cover" src={coverUrl} alt="Cover" />
				<span className="playlist-title-overlay">{props.title}</span>
			</div>
			<div className="playlist-meta">
				<span className="creator-avatar">{creatorInitial}</span>
				<span className="playlist-created">{props.created}</span>
			</div>
		</Link>

	)

}