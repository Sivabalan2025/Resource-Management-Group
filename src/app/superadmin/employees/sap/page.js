// app/employees/sap-pp-qm/page.js
import React from "react";
import "./sap.css";

export default function SAPPage() {
  return (
    <div className="department-container">
      {/* Page Title */}
      <h1 className="department-title">SAP PP/QM Department</h1>
      <p className="department-subtitle">
        Managing production planning and quality management processes with SAP solutions.
      </p>

      {/* Team Cards */}
      <div className="team-grid">
        {/* Production Planning */}
        <div className="team-card pp-team">
          <h3>Production Planning Team</h3>
          <p>
            Handles material requirements, scheduling, and shop floor management in SAP PP.
          </p>
        </div>

        {/* Quality Management */}
        <div className="team-card qm-team">
          <h3>Quality Management Team</h3>
          <p>
            Ensures product quality through inspections, audits, and compliance in SAP QM.
          </p>
        </div>

        {/* Integration */}
        <div className="team-card integration-team">
          <h3>Integration Team</h3>
          <p>
            Works on integration between SAP PP/QM and other SAP modules like MM and SD.
          </p>
        </div>

        {/* Reporting & Analytics */}
        <div className="team-card reporting-team">
          <h3>Reporting & Analytics Team</h3>
          <p>
            Provides insights with SAP reports, dashboards, and KPI monitoring.
          </p>
        </div>
      </div>
    </div>
  );
}
