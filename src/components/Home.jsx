import React, { useState } from "react";
//import { Link, useNavigate } from "react-router-dom";
// import ShowVideo from "./ShowVideo"
import ErrorMessage from "./errors/ErrorMessage"
// import Modal from "../Modal";
import AllVideos from "./AllVideos";

function Home () {
    //const navigate = useNavigate()
    //const apiURL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    //const [error,setError] = useState(false);
    const error = ErrorMessage;
    //  const [videos, setVideos] = useState([])


    const handleTextChange = (e) => {
        setSearch(e.target.value);
        // console.log(search);

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${search}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
          )
            .then((results) => results.json())
            .then((response) => {
            //   console.log(response);
              setSearchResults(response.items);
            //   console.log(response.items, searchResults);
            });
        };


        

    // fetch(`${apiURL}/videoId/`)
    // .then((response) => response.json())
    // .then((response) => {
    //     setSearchResults(response.items)
    //     console.log(setSearchResults)
    //     navigate("ShowVideo")
    
    // setVideos(
    //     response.items.map((video) => {
    //         return {
    //             videoId: video.id.videoId,
    //             title: video.snippet.title,
    //             thumbnail: video.snippet.thumbnail.default
    //         }
    //     })
    // )
    // })   
    // .catch((error) => {
    //     console.log("Error:", error)
    // })

    // setSearch("");
    

    return (
        <div>
            {error ? (
                <ErrorMessage />
            ) : (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" size="70" onChange={handleTextChange}  ></input>
                <input type="submit"  value="Search"  className="searchSbmt"/>
            </form>
            <section className="searchedVideos">
            {searchResults.map((video) => <AllVideos video={video}  key={video.id.videoId} />)}
            </section>
        </div>
            )}
        
        </div>
    )
}

export default Home;

            // <section className="videos-index-wrapper">
            //     <h2>All Videos</h2>
            //     <button>
            //         <Link to="/videos/videoId"></Link>
            //     </button>
            //     <br />
            //     <label htmlFor="searchVideo">
            //     Search Video: 
            //         <input 
            //             type="text"
            //             value={ShowVideo}
            //             id="showVideo"
            //             onChange={handleTextChange} />
            //     </label>
            //     <section className="video-index">
            //         {videos.map(video => {
            //             return {
            //                 videoId: video.id.videoId,
            //                 title: video.snippet.title,
            //                 thumbnail: video.snippet.thumbnail.default
            //             }
            //         })}
            //     </section>
            // </section>






                // useEffect(() => {
    //     ShowVideo({videos})
    //     .then(response => {
    //         setSearch(response)
    //         setSearchResults(response)
    //         error(false);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         setError(true);
    //     })
    // },[])