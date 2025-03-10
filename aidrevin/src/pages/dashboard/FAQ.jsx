import React from "react";
import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "How often is my credit score updated?",
      answer: "Your credit score is updated monthly or whenever new data is available.",
    },
    {
      question: "Does checking my credit score affect it?",
      answer: "No, checking your own credit score is considered a 'soft' inquiry and doesn't affect your score.",
    },
    {
      question: "How do I improve my credit score?",
      answer: "Pay bills on time, reduce debt, and maintain a healthy credit utilization ratio.",
    },
  ];

  return (
    <section id="faq" className="dashboard-section faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((f, index) => (
          <div key={index} className="faq-item">
            <h4>{f.question}</h4>
            <p>{f.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
