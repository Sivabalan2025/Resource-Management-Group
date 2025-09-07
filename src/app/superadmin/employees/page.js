"use client";

import Link from "next/link";
import {
  Users,
  Briefcase,
  Code,
  UserCheck,
  DollarSign,
  Database,
  Truck,
} from "lucide-react";
import "./employee.css";

export default function EmployeesPage() {
  const employeeStats = [
    { title: "Total Employees", value: 250 },
    { title: "Active Employees", value: 200 },
    { title: "On Leave", value: 30 },
    { title: "Work from Home", value: 20 },
  ];

  return (
    <div className="employee-container">
      <h1 className="employee-title">Employee Dashboard</h1>

      {/* Summary Cards */}
      <div className="employee-summary">
        {employeeStats.map((stat, index) => (
          <div key={index} className="employee-card">
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Departments Section */}
      <h2 className="team-title">Departments</h2>
      <div className="team-grid">
        <Link href="/superadmin/employees/marketing" className="team-card marketing">
          <div className="icon-container"><Users size={28} /></div>
          <p>Marketing Team</p>
        </Link>
        <Link href="/superadmin/employees/sales" className="team-card sales">
          <div className="icon-container"><Briefcase size={28} /></div>
          <p>Sales Team</p>
        </Link>
        <Link href="/superadmin/employees/dev" className="team-card development">
          <div className="icon-container"><Code size={28} /></div>
          <p>Development & Testing</p>
        </Link>
        <Link href="/superadmin/employees/hr" className="team-card hr">
          <div className="icon-container"><UserCheck size={28} /></div>
          <p>HR Team</p>
        </Link>
        <Link href="/superadmin/employees/finance" className="team-card finance">
          <div className="icon-container"><DollarSign size={28} /></div>
          <p>Finance Team</p>
        </Link>
        <Link href="/superadmin/employees/sap" className="team-card sap">
          <div className="icon-container"><Database size={28} /></div>
          <p>SAP PP/QM</p>
        </Link>
        <Link href="/superadmin/employees/delivery" className="team-card delivery">
          <div className="icon-container"><Truck size={28} /></div>
          <p>Delivery Team</p>
        </Link>
      </div>
    </div>
  );
}
