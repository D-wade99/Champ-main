import hamburgerMenu from '../assets/Hamburger Menu.svg'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const getNavVisibility = () => {
    return isOpen ? 'open' : '';
  };

  return (
    <nav className={`navbar padding_medium ${getNavVisibility()}`}>
      <p className="header">Johnathan Specter</p>
      <ul className={`nav_list ${getNavVisibility()}`}>
        <li className="list"><a href="/">Aticles</a></li>
        <li className="list"><a href="/">Chats</a></li>
        <li className="list"><a href="/">Awards</a></li>
        <li className="list"><a href="/">About</a></li>
      </ul>
      <button type="button" className="btn">
        Get in Touch
      </button>
      <button type="menu" className="menu" onClick={toggleNavbar}>
        {isOpen ? <img src={hamburgerMenu} alt="menu" /> : <img src={hamburgerMenu} alt="menu" />}
      </button>
    </nav>
  )
}

export default Navbar