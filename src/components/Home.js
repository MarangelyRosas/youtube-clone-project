import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowVideo from "./ShowVideo"
import ErrorMessage from "./errors/ErrorMessage"
// import Modal from "../Modal";


function Home ({videos, setVideos}) {
    const apiURL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(false);
    //  const [videos, setVideos] = useState([])


    const handleTextChange = (e) => {
        setSearch(e.target.value);

    }

    useEffect(() => {
        ShowVideo({videos})
        .then(response => {
            setSearch(response)
            setSearchResults(response)
            error(false);
        })
        .catch((error) => {
            console.log(error);
            setError(true);
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()

    fetch(`${apiURL}/videoId/`)
    .then((response) => response.json())
    .then((response) => {
        setSearchResults(response.items)
        console.log(setSearchResults)

    setVideos(
        response.items.map((video) => {
            return {
                videoId: video.id.videoId,
                title: video.snippet.title,
                thumbnail: video.snippet.thumbnail.default
            }
        })
    )
    })   
    .catch((error) => {
        console.log("Error:", error)
    })

    setSearch("");

    return (
        <div>
            {error ? (
                <ErrorMessage />
            ) : (
            <section className="videos-index-wrapper">
                <h2>All Videos</h2>
                <button>
                    <Link to="/videos/videoId"></Link>
                </button>
                <br />
                <label htmlFor="searchVideo">
                Search Video: 
                    <input 
                        type="text"
                        value={ShowVideo}
                        id="showVideo"
                        onChange={handleTextChange} />
                </label>
                <section className="video-index">
                    {videos.map(video => {
                        return {
                            videoId: video.id.videoId,
                            title: video.snippet.title,
                            thumbnail: video.snippet.thumbnail.default
                        }
                    })}
                </section>
            </section>
            )}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    id="search"
                    name="search"
                    value={search}
                    onChange={handleTextChange}
                    placeholder="videos"
                ></input>
                <label>Submit Search</label>
                <input id="submit" type="submit"></input>
            </form>
                {videos.length === 0 ? (
                <p>No search result yet. Please submit a search above.</p>
            ) : (
                <ShowVideo videos={videos} />           
            )}
        </div>
    )
}
}
export default Home;