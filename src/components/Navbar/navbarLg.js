import '../../css/Navbar.css'
import logo from '../../image/logo1.png';
function NavbarLg(){
    return(
        <>
        {/* NAVBAR */}
        <nav className="navbar" >
        <div className="navmain" id="navmain">
          <div className="logo">
          <i className="top-left"></i>
          <span><img src={logo} alt="logo" className="logoimg"/></span>
          <i className="top-right"></i></div>

  
          <div id="shadow-border">
          <ul className="menu" id="toggle-menu">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          </div>
        </div>
      </nav>
        </>
    );
}

export default NavbarLg;
