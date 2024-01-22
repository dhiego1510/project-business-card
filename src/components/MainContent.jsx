
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import Section from "./Info"

export default function Main() {
  return (
    <main className="main-container">

      <h1 className="main-h2 main-content">Diego Arias</h1>
      <h4 className="main-h4 main-content">Desarrollador de Software</h4>

        <span className="main-span main-content"></span>

          <div className="btn-class ">

          <a href="mailto:dhiego1510@gmail.com" className="main-button button-email button">
            <span>    
            <FontAwesomeIcon className="email" icon={faEnvelope} />
            </span>
            Email
          </a>

          <a href="https://www.linkedin.com/in/diego-arias-88b77a29b/" target="blank" className="main-button button-link button">
              <span>
              <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
              </span>
            linkedin
          </a>

          </div>
        
        <Section/>
    </main>
   
  )
} 