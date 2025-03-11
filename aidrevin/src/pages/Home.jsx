import React, { useState } from "react";
import "./Home.css";
import bankLogo from "../assets/standard-chartered-logo.png";
import womenFinanceImg from "../assets/women-finance.png";
import {
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaHandHoldingUsd,
  FaGlobe,
  FaUserCheck,
  FaAward,
  FaHandshake,
} from "react-icons/fa";
import Chatbot from "../components/Chatbot";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="home">

      {/* ================= Hero Section ================= */}
      <section className="hero">
        <img src={bankLogo} alt="Standard Chartered Bank Logo" className="bank-logo" />

        <h1>Empowering Women Financially</h1>
        <p className="bank-description">
          Standard Chartered Bank is a leading international bank committed to
          financial inclusion, especially for women. We provide innovative
          banking solutions, financial literacy programs, and dedicated support
          for women entrepreneurs.
        </p>

        <p>Financial freedom starts with understanding your credit score.</p>

        <button className="learn-more" onClick={handleOpenModal}>
          Learn More
        </button>

        <img
          src={womenFinanceImg}
          alt="Women Financial Empowerment"
          className="women-illustration"
        />
      </section>

      {/* ================= Government Schemes for Women ================= */}
      <section className="gov-schemes">
        <h2>Government Schemes for Women</h2>
        <p className="section-intro">
          Explore various government programs and initiatives designed to
          support women entrepreneurs, professionals, and home-makers.
        </p>
        <div className="scheme-cards">
          <div className="scheme-card">
            <FaHandHoldingUsd className="scheme-icon" />
            <h3>XYZ Loan Program</h3>
            <p>
              Offers low-interest loans for women-led startups with minimal
              collateral requirements.
            </p>
          </div>

          <div className="scheme-card">
            <FaGlobe className="scheme-icon" />
            <h3>Global Mentorship Initiative</h3>
            <p>
              Provides access to mentors worldwide to guide women in
              establishing and scaling their businesses.
            </p>
          </div>

          <div className="scheme-card">
            <FaUserCheck className="scheme-icon" />
            <h3>Financial Literacy Workshops</h3>
            <p>
              Government-backed workshops teaching budgeting, saving, and
              investment basics for women.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Women Entrepreneurs & Achievements ================= */}
      <section className="achievements">
        <h2>Women Entrepreneurs & Achievements</h2>
        <p className="section-intro">
          Celebrating inspiring success stories of women who broke barriers and
          built thriving enterprises.
        </p>

        <div className="achievement-list">
          <div className="achievement-item">
            <FaAward className="achievement-icon" />
            <h3>Jane Doe – Founder of BloomTech</h3>
            <p>
              Turned her passion for coding into a multinational software
              company, championing equal opportunities for women in tech.
            </p>
          </div>

          <div className="achievement-item">
            <FaHandshake className="achievement-icon" />
            <h3>Sarah Lee – CEO of GreenGro</h3>
            <p>
              Grew a small organic farm into a national brand by leveraging
              strategic partnerships and smart credit management.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Chatbot Section ================= */}
      <section className="chatbot-container">
        <h2>Chat with Our Credit Advisor</h2>
        <Chatbot />
      </section>

      {/* ================= Features Section ================= */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <FaChartLine className="feature-icon" />
            <h3>Real-Time Tracking</h3>
            <p>
              Monitor your credit score with detailed insights tailored for
              women.
            </p>
          </div>
          <div className="feature-item">
            <FaLightbulb className="feature-icon" />
            <h3>Personalized Guidance</h3>
            <p>
              Actionable advice designed to improve women’s financial
              well-being.
            </p>
          </div>
          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <h3>Secure & Trusted</h3>
            <p>
              Industry-leading security standards to protect your financial
              data.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Footer with Women's Quote ================= */}
      <footer className="footer">
        <p>
          “A woman’s best protection is a little money of her own.”
          <br />– Clare Boothe Luce
        </p>
      </footer>

      {/* ================= Learn More Modal ================= */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>How Credit-Bank Supports Women!</h2>
            <p>
              We are dedicated to empowering women by providing financial
              solutions tailored for their success.
            </p>
            <ul className="modal-list">
              <li>
                <FaHandHoldingUsd className="modal-icon" /> Special loan programs
                for women entrepreneurs
              </li>
              <li>
                <FaGlobe className="modal-icon" /> Global mentorship & networking
                opportunities
              </li>
              <li>
                <FaUserCheck className="modal-icon" /> Financial literacy
                workshops & career guidance
              </li>
              <li>
                <FaChartLine className="modal-icon" /> Real-time credit tracking
                and improvement tips
              </li>
              <li>
                <FaShieldAlt className="modal-icon" /> Secure banking with
                personalized financial advice
              </li>
            </ul>
            <button className="close-modal" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
