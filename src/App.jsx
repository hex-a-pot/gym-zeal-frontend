import { useEffect, useState } from "react";
import "./app.css"
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
  // For switching to mobile resolution
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
      <Navbar
        showBackground={showBackground}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <div className="body-contents">
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
      </div>
    </>
  );
}

export default App;
