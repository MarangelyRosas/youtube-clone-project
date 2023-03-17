import { Link } from "react-router-dom"

const developers = [
    {
        name:"Touhami Benmessaoud",
        description:"I am a full-stack developer in progress who has always had a love for technology.",
        githubLink:'https://github.com/touhami-ben'
        

    },
    {
        name:"Tafari Excell",
        description:"Developer with a focus on education and technology from New York City. Likes travel, food, and music.",
        githubLink:"https://github.com/Tafarigit"
    },
    {
        name:"Marangely Rosas",
        description:"I am a Junior Software Engineer currently studying to become a Full Stack Web Developer at Pursuit; which is an intensive 12 - month software engineering fellowship with a 9% acceptance rate.I joined Pursuit to obtain all the knowledge needed to become an amazing Software Engineer, and make a difference in my life for myself and my family. The goal is to move/relocate my Family out of NYC.",
        githubLink:"https://github.com/MarangelyRosas"
    }
]
    const project = {
        description: "Welcome to our YouTube Clone Project. his project is designed to assess the React skills we have gained so far in our journey to become Full Stack Web Developers. Inspired by the original YouTube, we created a React Application (from scratch) that allows users to search for YouTube videos using the YouTube API. It then allows you to choose a video from your search results to watch and the ability to share videos with an easy-to-use interface that anyone can navigate. Our website is designed to be user-friendly, with responsive design optimized for different devices such as desktops, laptops, tablets, and smartphones.",
        name: "YouTube-clone"
    }

export default function About(){
    return(
        <div>      
            <h3 className="project">
                Project Description:
            </h3>
            <h4>
                {project.description}
            </h4>
                <br></br>
        <section className="developer-info">       
            {developers.map((developer, index) => {
                return (
            <div key={index}> 
                <h4 className="name">{developer.name}</h4>
                <p className="description">{developer.description}</p>

                <Link to={developers.githubLink} className="githubLink">{developer.githubLink}</Link>
            </div>
                )
            })};                     
        </section>
        </div>
    )
    
}
