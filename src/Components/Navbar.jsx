
import "./navbar.css";
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar({ showBackground,showMobileMenu,setShowMobileMenu }) {
  
  return (
    <div
      className="nav-container"
      style={
        showBackground
          ? {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(3px)",
              WebkitBackdropFilter: "blur(3px)",
            }
          : {}
      }
    >
      <nav>
        <section className="left">
          <div className="logo">Gym Zeal</div>
        </section>
        <section className="right">
          <a href="#home" className="navigation-link">
            Home
          </a>
          <a href="#about" className="navigation-link">
            About
          </a>
          <a href="#pricing" className="navigation-link">
            Pricing
          </a>
          <a href="#faq" className="navigation-link">
            FAQ
          </a>
          <a href="#contact" className="navigation-link">
            Contact Us
          </a>
        </section>
        <section className="mobile-menu">
          <div
            className="more"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          >
            <IoReorderThreeOutline />
          </div>
          <div
            className="options"
            style={
              showMobileMenu
                ? {
                    display: "flex",
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    backdropFilter: "blur(3px)",
                    WebkitBackdropFilter: "blur(3px)",
                  }
                : { display: "none" }
            }
          >
            <a
              href="#home"
              className="navigation-link"
              onClick={() => {
                setShowMobileMenu(false);
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="navigation-link"
              onClick={() => {
                setShowMobileMenu(false);
              }}
            >
              About
            </a>
            <a
              href="#pricing"
              className="navigation-link"
              onClick={() => {
                setShowMobileMenu(false);
              }}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="navigation-link"
              onClick={() => {
                setShowMobileMenu(false);
              }}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="navigation-link"
              onClick={() => {
                setShowMobileMenu(false);
              }}
            >
              Contact Us
            </a>
          </div>
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
