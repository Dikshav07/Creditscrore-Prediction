// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import bankLogo from "../assets/standard-chartered-logo.png"; 
// ^ Make sure this path matches where you placed the image

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img src={bankLogo} alt="Standard Chartered Bank Logo" className="bank-logo" />
        <h1>Welcome to Standard Chartered Bank</h1>
        <p>Manage and improve your credit score effortlessly.</p>
        <button>Get Started</button>
      </section>

      {/* About the Bank */}
      <section className="about-bank">
        <h2>About Standard Chartered</h2>
        <p>
          Standard Chartered is a leading international banking group, with a presence in over
          60 markets and serving clients worldwide. Our mission is to drive commerce and prosperity
          through our unique diversity, and our heritage and values are expressed in our brand promise:
          <em> Here for good</em>.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Easy Tracking</h3>
            <p>Monitor your credit score in real-time with detailed insights.</p>
          </div>
          <div className="feature-item">
            <h3>Personalized Tips</h3>
            <p>Actionable advice tailored to your financial situation.</p>
          </div>
          <div className="feature-item">
            <h3>Secure Platform</h3>
            <p>Your data is protected with industry-leading security standards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
