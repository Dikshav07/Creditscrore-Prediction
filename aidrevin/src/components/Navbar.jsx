import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar__left">
        {isAuthenticated && (
          <button className="navbar__toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
        )}
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
        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
