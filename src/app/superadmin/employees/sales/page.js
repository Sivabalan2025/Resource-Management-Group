// app/employees/sales/page.js
import React from "react";
import "./sales.css";

export default function SalesPage() {
  return (
    <div className="department-container">
      {/* Page Title */}
      <h1 className="department-title">Sales Department</h1>
      <p className="department-subtitle">
        Driving revenue through strategy, execution, and customer success.
      </p>

      {/* Team Cards */}
      <div className="team-grid">
        {/* Inside Sales */}
        <div className="team-card inside-sales">
          <h3>Lead Generation Team</h3>
          <p>
            Responsible for creating potential customer leads.
          </p>
        </div>

        {/* Field Sales */}
        <div className="team-card field-sales">
          <h3>Client Acquisition Team</h3>
          <p>
            Focuses on coverting leads into paying customers.
          </p>
        </div>

        {/* Sales Support */}
        <div className="team-card sales-support">
          <h3>Account Management Team</h3>
          <p>
           Manages 
          </p>
        </div>

        {/* Customer Success */}
        <div className="team-card customer-success">
          <h3>Customer Success Team</h3>
          <p>
            Ensures client satisfaction, onboarding, and retention for long-term
            business growth.
          </p>
        </div>
      </div>
    </div>
  );
}
