import React, { useState } from "react";
import "./Home.css";
import bankLogo from "../assets/standard-chartered-logo.png";
import womenFinanceImg from "../assets/women-finance.png";
import { FaChartLine, FaShieldAlt, FaLightbulb, FaHandHoldingUsd, FaGlobe, FaUserCheck } from "react-icons/fa";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img src={bankLogo} alt="Standard Chartered Bank Logo" className="bank-logo" />
        <h1>Empowering Women Financially</h1>
        <p className="bank-description">
          Standard Chartered Bank is a leading international bank committed to financial inclusion, especially for women. 
          We provide innovative banking solutions, financial literacy programs, and dedicated support for women entrepreneurs.
        </p>
        <p>Financial freedom starts with understanding your credit score.</p>
        <button className="learn-more" onClick={() => setShowModal(true)}>Learn More</button>
        <img src={womenFinanceImg} alt="Women Financial Empowerment" className="women-illustration" />
      </section>

      {/* Learn More Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>How Standard Chartered Supports Women</h2>
            <p>We are dedicated to empowering women by providing financial solutions tailored for their success.</p>
            <ul className="modal-list">
              <li><FaHandHoldingUsd className="modal-icon" /> Special loan programs for women entrepreneurs</li>
              <li><FaGlobe className="modal-icon" /> Global mentorship & networking opportunities</li>
              <li><FaUserCheck className="modal-icon" /> Financial literacy workshops & career guidance</li>
              <li><FaChartLine className="modal-icon" /> Real-time credit tracking and improvement tips</li>
              <li><FaShieldAlt className="modal-icon" /> Secure banking with personalized financial advice</li>
            </ul>
            <button className="close-modal" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <FaChartLine className="feature-icon" />
            <h3>Real-Time Tracking</h3>
            <p>Monitor your credit score with detailed insights tailored for women.</p>
          </div>
          <div className="feature-item">
            <FaLightbulb className="feature-icon" />
            <h3>Personalized Guidance</h3>
            <p>Actionable advice designed to improve women’s financial well-being.</p>
          </div>
          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <h3>Secure & Trusted</h3>
            <p>Industry-leading security standards to protect your financial data.</p>
          </div>
        </div>
      </section>

      {/* Footer with Women's Quote */}
      <footer className="footer">
        <p>“A woman’s best protection is a little money of her own.” – Clare Boothe Luce</p>
      </footer>
    </div>
  );
}

export default Home;
