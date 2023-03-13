import React, { useState } from "react";
import Modal from "../Modal";
import Videolist from "../VideoList"


export default function home({videos, setVideos})
const [search, setSearch] = useState("");
const [searchResults, setSearchResults] = useState([])


const handelChange = (e) => {
    setSearch(e.target.value);
}

const handelSubmit = (e) => {
    e.preventDefault()
    fetch(`${apiURL}&part=snippet`)
    .then((response) => response.json())
    .then((response) => {
        setSearchResults(response.items)
        console.log(setSearchResults)

        setVideos(
            response.items.map((video, i) => {
                return{
                    videoId: video.id.videoId,
                    title: video.snippet.title,
                    thumbnail: video.snippet.thumbnail.default,
                }

            })
        )
    })
    .catch((error) => {
        console.log("Error:", error)
        // setIsOpen(true);
    });
    setSearch("")
    
}
return(
    <div>
        <form onSubmit={(e) => handelSubmit(e)}>
        <input
        id="search"
        name="search"
        value={search}
        onChange={handelChange}
        placeholder="videos"
        ></input>
        <label></label>
        <input id="submit" type="submit"></input>
        </form>
        {videos.length === 0 ? (
            <p>No search result yet. Please submit a search above.</p>
        ) : (
            <videoList videos={videos} />
        
        )}
    </div>
)