import React, { useState, useEffect } from 'react';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import './css/App.css';
import './css/Main.css';
import './css/Services.css';
import Footer from './components/Footer/footer';
import Main from './main';
import NavbarLg from './components/Navbar/navbarLg';
import NavbarSm from './components/Navbar/navbarSm';
import Projects from './pages/projects';
import Services from './pages/services';
import Skills from './pages/skills';


function App() {
  const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    const spinner = document.getElementById('loader-wrapper');

    if (spinner && !spinner.hasAttribute('hidden')) {
      spinner.setAttribute('hidden', 'true');
    }
    setSpinner(false)
  }, []);

  // [] means like componentDidMount

  return !spinner && 
  <>
  <NavbarLg />
  <NavbarSm />
  <Main />
  <AboutMe />
  <Services />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
</>;
  
}

export default App;
