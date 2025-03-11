import React from "react";
import "./Profile.css";

function Profile({ predictionData }) {
  return (
    <section id="profile" className="dashboard-section profile-section">
      <h2>Credit Score Details</h2>
      <form>
        <label>Current Credit Score</label>
        <input 
          type="number" 
          value={predictionData?.current_credit_score || "N/A"} 
          readOnly 
        />

        <label>Predicted Credit Score</label>
        <input 
          type="number" 
          value={predictionData?.new_predicted_score || "N/A"} 
          readOnly 
        />

        <label>Potential Credit Score</label>
        <input 
          type="number" 
          value={(predictionData?.new_predicted_score || 0) + 23} 
          readOnly 
        />

        <label>Best Improvement Action</label>
        <input 
          type="text" 
          value={predictionData?.best_improvement_action || "No improvement needed"} 
          readOnly 
        />

        <label>Personalized Tips</label>
        {predictionData?.personalized_tips && predictionData.personalized_tips.length > 0 ? (
          <ul className="personalized-tips-list">
            {predictionData.personalized_tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        ) : (
          <p>No personalized tips available</p>
        )}
      </form>
    </section>
  );
}

export default Profile;