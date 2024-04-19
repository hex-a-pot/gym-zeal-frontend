import './navbar.css'

function Navbar({showBackground}) {
  return (
    <div
        className="nav-container"
        style={showBackground ? { backgroundColor: "rgba(0, 0, 0, 0.8)",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)" } : {}}
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
        </nav>
      </div>
  )
}

export default Navbar