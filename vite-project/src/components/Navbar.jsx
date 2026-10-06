import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

import "./Navbar.css";

import logo from "../assets/shenron-logo.png";
import EnquiryForm from "./EnquiryForm";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // FORM STATE MUST BE HERE
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

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

  // OPEN FORM
  const handleEnquiryClick = () => {
    setMenuOpen(false);
    setIsEnquiryOpen(true);
  };

  // CLOSE FORM
  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <>
      <nav className="main-navbar">
        <div className="navbar-inner">

          {/* LOGO */}
          <button
            className="navbar-logo"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={logo}
              alt="Company Logo"
            />
          </button>

          {/* NAV LINKS */}
          <div
            className={`navbar-links ${
              menuOpen ? "navbar-links-open" : ""
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className="navbar-link"
                onClick={() =>
                  scrollToSection(item.id)
                }
              >
                {item.name}
              </button>
            ))}

            {/* RESERVE SEAT */}
            <button
              className="navbar-cta"
              onClick={handleEnquiryClick}
            >
              Reserve Seat
              <FaArrowRight />
            </button>
          </div>

          {/* MOBILE MENU */}
          <button
            className="navbar-menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>

        </div>
      </nav>

      {/* FORM */}
      <EnquiryForm
        isOpen={isEnquiryOpen}
        onClose={closeEnquiry}
      />
    </>
  );
};

export default Navbar;