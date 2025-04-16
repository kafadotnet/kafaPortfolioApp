import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="navigation" id="navigation">
      <nav className="section-container">
        <NavLink to="/" className="logo" onClick={closeMenu} end>
          kafa<span className="logo-dot">.</span>
          <span className="logo-tech">tech</span>
        </NavLink>

        <div
          className={`hamburger-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>

        <div className={`nav-menu--links ${menuOpen ? "show" : ""}`}>
          <NavLink to="/" className="nav-menu--link" onClick={closeMenu} end>
            Home
          </NavLink>
          <NavLink to="/about-me" className="nav-menu--link" onClick={closeMenu} end>
            About Me
          </NavLink>
          <NavLink to="/stacks" className="nav-menu--link" onClick={closeMenu} end>
            Stacks
          </NavLink>
          <NavLink to="/portfolio" className="nav-menu--link" onClick={closeMenu} end>
            Portfolio
          </NavLink>
          <NavLink to="/testimonials" className="nav-menu--link" onClick={closeMenu} end>
            Testimonials
          </NavLink>
          <NavLink to="/contact-me" className="nav-menu--link" onClick={closeMenu} end>
            Contact Me
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default NavigationLayout;
