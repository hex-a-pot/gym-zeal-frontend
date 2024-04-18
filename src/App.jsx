import { useEffect, useState } from "react";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Faq from "./Sections/Faq/Faq";
import Home from "./Sections/Home/Home";
import Pricing from "./Sections/Pricing/Pricing";
import Navbar from "./Components/Navbar";
function App() {
  
  // For Scrolling and setting the navbar bg
  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) setShowBackground(true);
      else setShowBackground(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar showBackground={showBackground}/>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
