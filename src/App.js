import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import "./css/App.css";
import "./css/Main.css";
import "./css/Services.css";
import Footer from "./components/Footer/footer";
// import Main from './main';
import Home from "./components/Home/Home";
import NavbarLg from "./components/Navbar/navbarLg";
import NavbarSm from "./components/Navbar/navbarSm";
import Projects from "./pages/projects";
import Services from "./pages/services";
import Skills from "./pages/skills";
import Loader from "./components/Loader/Loader";
import { useState } from "react";
function App() {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<>
			{isLoading ? (
				<Loader setIsLoading={setIsLoading} />
			) : (
				<div className="ManContetnt">
					<NavbarLg />
					<NavbarSm />
					{/* <Main /> */}
					<Home />
					<AboutMe />
					<Services />
					<Skills />
					<Projects />
					<Contact />
					<Footer />
				</div>
			)}
		</>
	);
}

export default App;
