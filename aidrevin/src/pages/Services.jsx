// src/pages/Services.jsx
import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <h2>Credit Tracking</h2>
          <p>Track your credit score in real-time with detailed reports.</p>
        </div>
        <div className="service-card">
          <h2>Financial Consulting</h2>
          <p>Get professional advice on improving credit and managing finances.</p>
        </div>
        <div className="service-card">
          <h2>Loan Assistance</h2>
          <p>Find the best loan options with minimal impact on your credit score.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
