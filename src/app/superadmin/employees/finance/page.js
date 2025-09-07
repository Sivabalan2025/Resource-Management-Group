// app/employees/finance/page.js
import React from "react";
import "./finance.css";

export default function FinancePage() {
  return (
    <div className="department-container">
      {/* Page Title */}
      <h1 className="department-title">Finance Department</h1>
      <p className="department-subtitle">
        Managing the company’s financial planning, reporting, and resource allocation.
      </p>

      {/* Team Cards */}
      <div className="team-grid">
        {/* Accounts Payable */}
        <div className="team-card payable-team">
          <h3>Accounts Payable</h3>
          <p>
            Handles vendor invoices, outgoing payments, and financial obligations.
          </p>
        </div>

        {/* Accounts Receivable */}
        <div className="team-card receivable-team">
          <h3>Accounts Receivable</h3>
          <p>
            Manages customer invoices, collections, and incoming payments.
          </p>
        </div>

        {/* Budgeting & Planning */}
        <div className="team-card budgeting-team">
          <h3>Budgeting & Planning</h3>
          <p>
            Prepares budgets, forecasts, and financial strategies for growth.
          </p>
        </div>

        {/* Audit & Compliance */}
        <div className="team-card audit-team">
          <h3>Audit & Compliance</h3>
          <p>
            Ensures financial accuracy, regulatory compliance, and risk management.
          </p>
        </div>
      </div>
    </div>
  );
}
