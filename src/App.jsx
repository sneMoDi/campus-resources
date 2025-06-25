import Header from "./components/Header"; // Keep this if you still want the logo
import Hero from "./components/Hero";
import AccordionGroup from "./components/AccordionGroup";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";


function App() {
return (
<div className="font-sans bg-white text-black scroll-smooth">
<Header /> {/* You can remove this if you want to fully drop nav */}
<Hero />
<AccordionGroup />
<OurTeam />
<ContactUs />
<Footer />
</div>
  );
}

export default App;