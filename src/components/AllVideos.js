import {Link} from 'react-router-dom'
//import "./AllVideos.css";

export default function AllVideos({ video }) {
  return (
    <article className="video">
        
        <Link to={`/videos/${video.id.videoId}`}>
            <img src={video.snippet.thumbnails.medium.url} alt="video img" />
        </Link>
        <h4>{video.snippet.title}</h4>
     
    </article>
  );
}