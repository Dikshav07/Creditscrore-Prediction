import React from "react";
import "./Notifications.css";

function Notifications() {
  const notifications = [
    { id: 1, message: "Your credit score increased by 5 points!" },
    { id: 2, message: "Payment due for Credit Card ending 1234 on 10th." },
    { id: 3, message: "You are close to achieving your monthly savings goal." },
  ];

  return (
    <section id="notifications" className="dashboard-section notifications-section">
      <h2>Notifications</h2>
      <ul className="notifications-list">
        {notifications.map((notif) => (
          <li key={notif.id} className="notification-item">
            {notif.message}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Notifications;
