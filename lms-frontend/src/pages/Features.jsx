// src/pages/Features.jsx
import React from "react";

function Features() {
  return (
    <section>
      <h3>Key Features</h3>
      <div className="features-container">
        <div className="feature-card">
          <h4>📚 Book Management</h4>
          <p>Add, update, and organize books with ease.</p>
        </div>
        <div className="feature-card">
          <h4>👩‍💻 User Accounts</h4>
          <p>Manage members, students, and staff efficiently.</p>
        </div>
        <div className="feature-card">
          <h4>📊 Reports & Analytics</h4>
          <p>Track issued books, due dates, and overall usage.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
