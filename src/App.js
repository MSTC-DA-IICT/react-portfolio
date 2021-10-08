
import AboutMe from './aboutMe';
import Contact from './contact';
import './css/App.css';
import './css/Main.css';
import './css/Services.css';
import Footer from './footer';
import Main from './main';
import NavbarLg from './navbarLg';
import NavbarSm from './navbarSm';
import Projects from './projects';
import Services from './services';
import Skills from './skills';


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
