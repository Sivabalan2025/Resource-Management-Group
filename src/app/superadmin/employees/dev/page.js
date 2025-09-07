// app/employees/development/page.js
import React from "react";
import "./development.css";

export default function DevelopmentPage() {
  return (
    <div className="department-container">
      {/* Page Title */}
      <h1 className="department-title">Development & Testing Department</h1>
      <p className="department-subtitle">
        Building, testing, and ensuring delivery of high-quality software
        solutions.
      </p>

      {/* Team Cards */}
      <div className="team-grid">
        {/* Frontend */}
        <div className="team-card frontend-team">
          <h3>Frontend Team</h3>
          <p>
            Develops user interfaces and ensures smooth, responsive user
            experiences.
          </p>
        </div>

        {/* Backend */}
        <div className="team-card backend-team">
          <h3>Backend Team</h3>
          <p>
            Manages server-side logic, databases, and integrations for scalable
            apps.
          </p>
        </div>

        {/* QA */}
        <div className="team-card qa-team">
          <h3>QA Team</h3>
          <p>
            Ensures software quality with manual and automated testing
            strategies.
          </p>
        </div>

        {/* DevOps */}
        <div className="team-card devops-team">
          <h3>DevOps Team</h3>
          <p>
            Manages CI/CD pipelines, deployments, and cloud infrastructure for
            reliability.
          </p>
        </div>
      </div>
    </div>
  );
}
