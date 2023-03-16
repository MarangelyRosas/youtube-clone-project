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
    const project ={
        description: "Create a React application that lets you search for YouTube videos using the YouTube API, then choose a video from a list to watch.This project is designed to assess the React skills you have gained so far. There are 7 features that need to be completed. Each completed feature (passes all the tests) will be worth 1 point. A minium of 5 points must be attained in order to pass this assessment. You may receive partial credit (0.5 points) for features that are close but do not work exactly as specified.",
        name: "YouTube-clone"
    }

export default function About(){
    return(
        <section className="developer-info">
            {developers.map((developer, index) => {
                return (
            <div key={index}> 
                <p className="name">{developer.name}</p>
                <p className="description">{developer.description}</p>

                <Link to={developers.githubLink} className="githubLink">{developer.githubLink}</Link>
            </div>
                )
            })};
            <h2 className="project">
                Project Description:
                <br></br>
                {project.description}
            </h2>
            
        </section>
        
    )
    
}