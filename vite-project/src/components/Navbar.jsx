import React, { useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import "./Navbar.css";

import logo from "../assets/shenron-logo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Curriculum", id: "curriculum" },
    { name: "Package", id: "package" },
    { name: "What We Offer", id: "offers" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="main-navbar">
      <div className="navbar-inner">
        <button
          className="navbar-logo"
          onClick={() => scrollToSection("home")}
        >
          <img src={logo} alt="Company Logo" />
        </button>

        <div className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="navbar-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          ))}

          <button
            className="navbar-cta"
            onClick={() => scrollToSection("package")}
          >
            Reserve Seat
            <FaArrowRight />
          </button>
        </div>

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;