// app/employees/hr/page.js
import React from "react";
import "./hr.css";

export default function HRPage() {
  return (
    <div className="department-container">
      {/* Page Title */}
      <h1 className="department-title">HR Department</h1>
      <p className="department-subtitle">
        Managing employee relations, talent acquisition, and organizational growth.
      </p>

      {/* Team Cards */}
      <div className="team-grid">
        {/* Recruitment */}
        <div className="team-card recruitment-team">
          <h3>Recruitment Team</h3>
          <p>
            Focuses on hiring the right talent through interviews, assessments, and onboarding.
          </p>
        </div>

        {/* Employee Relations */}
        <div className="team-card relations-team">
          <h3>Employee Relations Team</h3>
          <p>
            Handles employee engagement, conflict resolution, and workplace culture.
          </p>
        </div>

        {/* Payroll & Benefits */}
        <div className="team-card payroll-team">
          <h3>Payroll & Benefits Team</h3>
          <p>
            Manages employee compensation, benefits, and compliance with labor laws.
          </p>
        </div>

        {/* Training & Development */}
        <div className="team-card training-team">
          <h3>Training & Development Team</h3>
          <p>
            Provides employee training programs and supports career growth initiatives.
          </p>
        </div>
      </div>
    </div>
  );
}
