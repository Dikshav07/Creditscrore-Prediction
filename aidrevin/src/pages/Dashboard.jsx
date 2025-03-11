import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

import Profile from "./dashboard/Profile";
import ProgressTracking from "./dashboard/ProgressTracking";
import Notifications from "./dashboard/Notifications";
import CreditScoreForm from "./dashboard/CreditScoreForm";
import FAQ from "./dashboard/FAQ";
import PersonalizedTips from "./dashboard/PersonalizedTips";
import { fetchUserProfile } from "../api/auth"; // Import API function

function Dashboard() {
  const [userName, setUserName] = useState("");
  const [predictionData, setPredictionData] = useState(null); // Keep prediction state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token"); // Get stored token
      if (!token) {
        // Redirect to login if no token is found
        navigate("/login");
        return;
      }

      try {
        const userData = await fetchUserProfile(token);
        setUserName(userData.name); // Set name in state
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="dashboard-page">
      <h1>Welcome, {userName ? userName : "User"} to your dashboard!</h1> {/* Display user's name */}
      
      <Profile predictionData={predictionData} />
      <ProgressTracking />
      <Notifications /> {/* Included from new code */}
      
      <CreditScoreForm setPredictionData={setPredictionData} />
      <PersonalizedTips />
      <FAQ />
    </div>
  );
}

export default Dashboard;
