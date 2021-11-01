import "./Navbar.css";
function NavbarSm() {

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar-sm">
        <div className="navmain" id="navmain">
          <div className="logo">
            <i className="top-left"></i>
            <span>MSTC</span>
            <i className="top-right"></i>
          </div>

          <div class="dropdown show">
            <div
              class="dropdown-toggle"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>

            <ul
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuLink"
            >
              <li className="dropdown-item">
                <a href="#home">Home</a>
              </li>
              <li className="dropdown-item">
                <a href="#about">About</a>
              </li>
              <li className="dropdown-item">
                <a href="#services">Services</a>
              </li>
              <li className="dropdown-item">
                <a href="#skills">Skills</a>
              </li>
              <li className="dropdown-item">
                <a href="#projects">Projects</a>
              </li>
              <li className="dropdown-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarSm;
