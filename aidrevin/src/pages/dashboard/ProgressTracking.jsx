import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./ProgressTracking.css";

const data = [
  { month: "Jan", score: 680 },
  { month: "Feb", score: 690 },
  { month: "Mar", score: 700 },
  { month: "Apr", score: 710 },
  { month: "May", score: 715 },
  { month: "Jun", score: 730 },
];

function ProgressTracking() {
  return (
    <section id="progress" className="dashboard-section progress-section">
      <h2>Progress Tracking</h2>
      <div className="chart-container">
        <LineChart width={400} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[650, 800]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </div>
    </section>
  );
}

export default ProgressTracking;
