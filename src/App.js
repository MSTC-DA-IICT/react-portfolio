
import './css/App.css';
import './css/Services.css';
import './css/App.css';
import Navbar from './navbar';
import Main from './main';
import AboutMe from './aboutMe';
import Services from './services';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

function App() {
  return (
    <>
      <Navbar />
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
