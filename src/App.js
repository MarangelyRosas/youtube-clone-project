import "./App.css";
import Nav from "./components/common/Nav.js";
//import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./components/Home.js";
import Footer from "./components/common/Footer.js";


//const apiURL =  `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
function App() {
 

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/videos" element={<ShowsVideo />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
