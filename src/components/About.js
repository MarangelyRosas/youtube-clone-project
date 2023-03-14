const developers = [
    {
        name:"touhami",
        description:'',
        githubLink:'url'

    },
    {
        name:"tafari",
        description:"",
        githubLink:"url"
    },
    {
        name:"marangely",
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