import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="footer-container">
      <a target="blank" href="https://www.instagram.com/dhiego_1510?igsh=ZDZuNWxoc2t4Z2Uy" >
        <FontAwesomeIcon className="photo-social button" icon={faInstagram} />
      </a>
      
      <a href="https://github.com/dhiego1510" target="blank" >
        <FontAwesomeIcon className="photo-social button" icon={faGithub} />
      </a>
      
    </footer>
  )
}