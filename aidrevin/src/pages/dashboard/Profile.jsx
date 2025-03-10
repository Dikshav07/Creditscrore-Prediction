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
          value={predictionData?.new_predicted_score + 23 || "N/A"} 
          readOnly 
        />

      </form>
    </section>
  );
}

export default Profile;