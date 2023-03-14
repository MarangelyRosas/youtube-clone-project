const developers = [
    {
        name:"Touhami Benmessaoud",
        description:"",
        githubLink:'https://github.com/touhami-ben'

    },
    {
        name:"Tafari Excell",
        description:"",
        githubLink:"https://github.com/Tafarigit"
    },
    {
        name:"Marangely Rosas",
        description:"",
        githubLink:"https://github.com/MarangelyRosas"
    }
]
export default function About(){
    return(
        <section className="developer-info">
            {developers.map((developer, index) => {
                return (
            <div key={index}> 
                <p className="name">{developer.name}</p>
                <p className="description">{developer.description}</p>
                <p className="githubLink">{developer.githubLink}</p>
            </div>
                )
            
        })}
        </section>
    )
    
}