// Videos
const apiURL =  `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

// Index/Get all Videos
 export function getAllVideos() {
    return fetch(`${apiURL}/videos`)
    .then(response => response.json()); // fetch returns an array of videos in JS.
  }