import React, { useState } from "react";
import Modal from "../Modal";
import VideoList from "../VideoList"


export default function Home({videos, setVideos})
const [search, setSearch] = useState("");
const [searchResults, setSearchResults] = useState([])


const handleChange = (e) => {
    setSearch(e.target.value);
}

const handleSubmit = (e) => {
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
                    thumbnail: video.snippet.thumbnail.default
                }
            })
        )
    })
    .catch((error) => {
        console.log("Error:", error)
        // setIsOpen(true);
    });
    setSearch("")
    


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    id="search"
                    name="search"
                    value={search}
                    onChange={handleChange}
                    placeholder="videos"
                ></input>
                <label></label>
                <input id="submit" type="submit"></input>
            </form>
                {videos.length === 0 ? (
                <p>No search result yet. Please submit a search above.</p>
            ) : (
                <VideoList videos={videos} />           
            )}
        </div>
    )
}