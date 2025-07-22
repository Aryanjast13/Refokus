import LocomotiveScroll from 'locomotive-scroll';
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Marquees from "./components/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Projects";
import Stripes from "./components/Stripes";
import Work from "./components/Work";




function App() {
	const locomotiveScroll = new LocomotiveScroll();
	
	return (
		<div className="w-full border border-transparent bg-primary font-satoshi text-white ">
			<Navbar />
			<Work />
			<Stripes />
			<Products />
			<Marquees />
			<Cards />
			<Footer/>
		</div>
	);
}

export default App;