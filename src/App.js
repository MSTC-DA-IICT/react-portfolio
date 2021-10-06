
import './css/App.css';
import './css/Services.css';
import './css/Main.css';

import NavbarLg from './navbarLg';
import Main from './main';
import AboutMe from './aboutMe';
import Services from './services';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';
import NavbarSm from './navbarSm';

function App() {
  return (
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
    </>
  );
}

export default App;
