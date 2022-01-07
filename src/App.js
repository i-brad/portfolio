import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HR from "./Components/HR";
import Nav from "./Components/Nav";
import Portfolio from "./Components/Portfolio";
import Skill from "./Components/Skill";

function App() {
	return (
		<div className="App">
			<Nav />
			<HR />
			<Portfolio />
			<Skill />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
