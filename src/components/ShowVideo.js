import React from 'react'
import { Link } from "react-router-dom"

export default function ShowVideo({ videos }) {

    return (
      <article>
          <ul>
        {videos.map((video, i) => {
  
          return (
              <li key={`${video.videoId}-${i}`} >
                  <Link to={`/videos/${video.videoId}`} >
                      <img src={video.thumbnail.url} alt={video.title} />
                      <p>{video.title}</p>
                  </Link>
              </li>
          )
        })}
        </ul>
      </article>
    )
}

// function ShowVideo(videos) {
    // const apiURL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    // const [search, setSearch] = useState("");
    // const [searchResults, setSearchResults] = useState([]);
    // const [error, setError] = useState(false);
    //  const [videos, setVideos] = useState([])

    


//     return fetch(`${apiURL}/videos`)
//     .then(response => response.json()) // fetch returns an array of videos in JS.
//     .then(response => {
//         setSearch(response)
//         setSearchResults(response)
//         setError(false);
//     })
//     .catch((error) => {
//         console.log(error);
//         setError(true);
//     })
// }
// export default ShowVideo;
