import React from "react";
import "./Profile.css";

function Profile({ predictionData }) {
  return (
    <section id="profile" className="dashboard-section profile-section">
      <h2>Credit Score Details</h2>
      <form>
        <label>Current Credit Score</label>
        <input type="number" value={700} readOnly /> {/* Hardcoded value */}

        <label>Predicted Credit Score</label>
        <input type="number" value={750} readOnly /> {/* Hardcoded value */}

        <label>Potential Credit Score</label>
        <input type="number" value={800} readOnly /> {/* Hardcoded value */}
      </form>
    </section>
  );
}

export default Profile;
