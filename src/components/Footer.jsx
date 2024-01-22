import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="footer-container">
      <FontAwesomeIcon className="photo-social" icon={faInstagram} />
      <FontAwesomeIcon className="photo-social" icon={faGithub} />
        

    </footer>
  )
}