// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <button className="navbar__toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="navbar__logo">
          <Link to="/">CreditBank</Link>
        </div>
      </div>

      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="navbar__auth">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </header>
  );
}

export default Navbar;
