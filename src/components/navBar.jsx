import {LuUser, LuFolder, LuMail, LuContact} from "react-icons/lu";

const NavLink = ({href, icon: Icon, children}) => (
  
  <a href={href} className="nav-item"> 
  <Icon className="nav-icon"/>  
  <span>{children}</span>
  </a>
)

const Navbar = () => {
  return (

    <nav className="container nav-header" style={{ padding: "20px 0", display: "flex", alignItems: "center" }}>
      <h2 className="nav-logo">Gio</h2>


      <div className="nav-links">
        <NavLink href="#about" icon={LuUser}>About</NavLink>
        <NavLink href="#projects" icon={LuFolder}>Projects</NavLink>
        <NavLink href="#contact" icon={LuMail}>Contact</NavLink>
      </div>

      <div className="fading-line"></div>
      
    </nav>
  );
};

export default Navbar;