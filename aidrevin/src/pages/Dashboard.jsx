// src/pages/Dashboard.jsx
import React, { useState } from "react";
import "./Dashboard.css";

import Profile from "./dashboard/Profile";
import ProgressTracking from "./dashboard/ProgressTracking";

import CreditScoreForm from "./dashboard/CreditScoreForm";
import FAQ from "./dashboard/FAQ";
import PersonalizedTips from "./dashboard/PersonalizedTips";

function Dashboard() {
  const [predictionData, setPredictionData] = useState(null);
  return (
    <div className="dashboard-page">
      <h1>Welcome to Your Dashboard</h1>
      <Profile predictionData={predictionData} />
      <ProgressTracking />
      
      <CreditScoreForm setPredictionData={setPredictionData} />      <PersonalizedTips />
      <FAQ />
    </div>
  );
}

export default Dashboard;