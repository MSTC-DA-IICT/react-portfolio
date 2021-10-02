<<<<<<< HEAD
import './css/Navbar.css'
=======
>>>>>>> upstream/main
function Navbar(){
    return(
        <>
        {/* NAVBAR */}
<<<<<<< HEAD
        <nav className="navbar" >
        <div className="navmain" id="navmain">
        
          <div className="logo"><span>#ME</span></div>
          <a href="#" className="toggle-btn"> {/*onclick method pending*/}
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div>
          <div id="navbar-links">
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
        </div>
      </nav>
=======
            <nav className="navbar" id="navbar">
            <div className="navmain container">
                <div className="logo"><span>#ME</span></div>
                <ul className="menu" id="toggle-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            </nav>
            <hr></hr>
>>>>>>> upstream/main
        </>
    );
}

export default Navbar;