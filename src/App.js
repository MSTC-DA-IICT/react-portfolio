
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
