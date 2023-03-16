import "./App.css";
import Nav from "./components/common/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Footer from "./components/common/Footer.jsx";
import ShowVideo from "./components/ShowVideo.jsx";
import About from "./components/About.jsx";
import AllVideos from "./components/AllVideos.jsx";



//const apiURL =  `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:videoId" element={<ShowVideo />} />  
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
