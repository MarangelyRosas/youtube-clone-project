const developers = [
    {
        name:"Touhami Benmessaoud",
        description:'',
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
export default function About({developers}){
    return(
        <section className="developer-info">
            {developers.map(developer => {
            return <About name={developer.name} description={developer.description} githubLink={developer.githubLink} />
            
        })}
        </section>
    )
    
}
{/* <p className="name">{developer.name}</p>
            <p className="description">{developer.description}</p>
            <p className="githubLink">{developer.githubLink}</p>
         */}