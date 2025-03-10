// src/components/Sidebar.jsx
import React from "react";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";

function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar__header">
        <h2>Dashboard Menu</h2>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>

      <div className="sidebar__links">
        <a href="/dashboard#profile" onClick={toggleSidebar}>
          Profile
        </a>
        <a href="/dashboard#progress" onClick={toggleSidebar}>
          Progress Tracking
        </a>
        <a href="/dashboard#notifications" onClick={toggleSidebar}>
          Notifications
        </a>
        <a href="/dashboard#simulator" onClick={toggleSidebar}>
          Credit Score Simulator
        </a>
        <a href="/dashboard#tips" onClick={toggleSidebar}>
          Personalized Tips
        </a>
        <a href="/dashboard#faq" onClick={toggleSidebar}>
          FAQ
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
