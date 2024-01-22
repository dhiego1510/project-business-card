
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import Section from "./Info"

export default function Main() {
  return (
    <main className="main-container">
      <h1 className="main-h2">Diego Arias</h1>
      <h4 className="main-h4">Desarrollador de Software</h4>
        <p className="main-parr">algo de algo </p>

        <button 
          className="main-button-linkedin">
          <FontAwesomeIcon className="icon-linkedin" icon={faLinkedin} />

        </button>

        <button className="main-button-gmail">
        <FontAwesomeIcon className="icon-gmail" icon={faEnvelope} />
        </button>

        <Section/>
    </main>
   
  )
} 