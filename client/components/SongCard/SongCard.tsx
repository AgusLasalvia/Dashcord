import "./SongCard.css"
interface SongCardProps {
	title: string,
	artist: string
	youtube_id: string
}

export default function SongCard(props: SongCardProps) {
	const youtubeLink = `https://www.youtube.com/watch?v=${props.youtube_id}`;
	return (
		<div className="song-card" data-youtube={youtubeLink}>
			<img
				className="music-cover"
				src={`https://img.youtube.com/vi/${props.youtube_id}/hqdefault.jpg`}
				alt="Cover"
			/>
			<span className="music-title">{props.title}</span>
			<span className="music-artist">{props.artist}</span>
			<span className="copy-feedback"
			><i className="bi bi-clipboard-check"></i> Copiado!</span>
		</div>
	)
}