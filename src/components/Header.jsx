
import profilephoto from "../images/profile-photo.jpg"

export default function Header() {
  return (
    <header className="header-container">
      <img className="photo" src={profilephoto}/>
    </header>
  )
}