function Navbar(){
    return(
        <>
        {/* NAVBAR */}
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
        </>
    );
}

export default Navbar;