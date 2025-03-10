import React from "react";
import "./PersonalizedTips.css";

function PersonalizedTips({ tips }) {
  const defaultTips = [
    "Reduce your credit card balance to lower utilization.",
    "Make on-time payments to improve your payment history.",
    "Lower your debt-to-income ratio by paying off some debt."
  ];

  return (
    <section id="personalized-tips" className="dashboard-section personalized-tips-section">
      <h2>Personalized Tips</h2>
      <p>Here are some tailored suggestions to help you improve your credit score:</p>
      <ul>
        {tips && tips.length > 0
          ? tips.map((tip, index) => <li key={index}>{tip}</li>)
          : defaultTips.map((tip, index) => <li key={index}>{tip}</li>)}
      </ul>
    </section>
  );
}

export default PersonalizedTips;
