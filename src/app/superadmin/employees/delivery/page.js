// app/employees/delivery/page.js
import React from "react";
import "./delivery.css";

export default function DeliveryPage() {
  return (
    <div className="department-container">
      {/* Page Title */}
      <h1 className="department-title">Delivery Department</h1>
      <p className="department-subtitle">
        Ensuring timely, efficient, and quality delivery of client projects.
      </p>

      {/* Team Cards */}
      <div className="team-grid">
        {/* Project Management */}
        <div className="team-card pm-team">
          <h3>Project Management Team</h3>
          <p>
            Oversees client projects, schedules, and ensures deliverables are met.
          </p>
        </div>

        {/* Client Support */}
        <div className="team-card support-team">
          <h3>Client Support Team</h3>
          <p>
            Works closely with clients to provide updates, resolve issues, and ensure satisfaction.
          </p>
        </div>

        {/* Quality Assurance */}
        <div className="team-card qa-team">
          <h3>Quality Assurance Team</h3>
          <p>
            Verifies deliverables meet quality standards before deployment to clients.
          </p>
        </div>

        {/* Logistics */}
        <div className="team-card logistics-team">
          <h3>Logistics Team</h3>
          <p>
            Manages resources, tools, and infrastructure required for successful delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
