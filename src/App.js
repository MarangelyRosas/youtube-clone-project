import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  const APIURL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`;

  const testYoutubeApiKey = () => {
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
  };
  useEffect(() => {
    testYoutubeApiKey();
  });

    fetch(
      `${APIURL}/videos`
        .then((response) => {
          response.json();
        })
        .catch((error) => {
          console.log(error);
        })
    );
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
