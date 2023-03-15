// // import { Link } from "react-router-dom";
// import "./Nav.css";


// export default function Nav() {
//     return (
//         <header>
//            <p> Youtube <span className="headerHome"> Home</span><span className="headerAbout"> About</span>
//            </p>
//             <section>
//              <h1>
//                 {/* <Link to="/">

//                 </Link> */}


//              </h1>
//             </section>
//         </header>
//     )
// }

import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(){
  return(
    <header>
      <article>
        <h1>
          <Link to="/"> 
          Youtube
           </Link> 
        </h1>
      </article>
      <nav>
        <ul>
          <li>
           <Link to="/home">
            Home
             </Link> 
          </li>
          <li>
            <Link to="/about">
            About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}