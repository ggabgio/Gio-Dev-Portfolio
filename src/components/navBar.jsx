import { LuUser, LuFolder, LuMail, LuMenu, LuContact, LuX} from "react-icons/lu";
import {useState, useEffect} from "react";
import "../styles/navBar.css";

const NavLink = ({href, icon: Icon, children, onClick}) => (
  <a href={href} className="nav-item" onClick={onClick}> 
    <Icon className="nav-icon"/>  
    <span>{children}</span>
    </a>
  )

const Navbar = () => {
  
  const[isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  {/* To avoid background scrolling when mmobile menu is open*/}
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

  /* cleanup on unmount */
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isMenuOpen]);


  {/* Main */}
  return (

    <nav className="container nav-header" style={{ padding: "20px 0", display: "flex", alignItems: "center" }}>
      <h2 className="nav-logo">Gio</h2>

      {/* Desktop Navigation */}
      <div className="nav-links desktop-only">
        <NavLink href="#about" icon={LuUser}>About</NavLink>
        <NavLink href="#projects" icon={LuFolder}>Projects</NavLink>
        <NavLink href="#contact" icon={LuMail}>Contact</NavLink>
      </div>
      {/* End of Desktop Navigation */}

      {/* Mobile Hamburger Icon */}
      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Open menu">
        <LuMenu size = {28} color="#f5f5f5" />
      </button>
      {/* End of Mobile Hamburger Icon */}

      {/* Fullscreen mobile overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? "open" : ""}`}>
        
        {/* Header */}
        <div className="overlay-header">
          <div className="profile-badge">
            <div className="profile-avatar">LG</div>
            <div className="profile-info">
              <span className="profile-name">Leogelio Gabriel</span>
              <span className="profile-role">Developer</span>
            </div>
          </div>
          <button className="close-menu-btn" onClick={toggleMenu} aria-label="Close menu">
            <LuX size = {24} color="#f5f5f5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="overlay-content">
          <p className="nav-label">NAVIGATION</p>
          <div className="overlay-links">
            <NavLink href="#projects" icon={LuFolder} onClick={toggleMenu}>Projects</NavLink>
            <NavLink href="#about" icon={LuUser} onClick={toggleMenu}>About</NavLink>
            <NavLink href="#contact" icon={LuMail} onClick={toggleMenu}>Contact</NavLink>
          </div>
        </div>

      </div>

      <div className="fading-line"></div>
    </nav>
  );
};

export default Navbar;