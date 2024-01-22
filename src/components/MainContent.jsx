
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

          <button className="main-button button-email">
            <span>    
            <FontAwesomeIcon className="email" icon={faEnvelope} />
            </span>
            Email
          </button>

          <button className="main-button button-link">
              <span>
              <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
              </span>
            linkedin
          </button>

          </div>
        
        <Section/>
    </main>
   
  )
} 