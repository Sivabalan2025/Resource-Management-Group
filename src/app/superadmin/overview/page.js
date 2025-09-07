"use client";

import Link from "next/link";
import "./dashboard.css";

export default function SuperadminOverview() {
  // ----- Mock data -----
  const kpis = [
    { title: "Total Employees", value: "220", accent: "#f7b500" },
    { title: "Total Projects", value: "18", accent: "#10b981" },
    { title: "Assign projects", value: "14", accent: "#3b82f6" },
    { title: "Report", value: "14", accent: "#8b5cf6" },
  ];

  // Progress vs Target
  const progressData = [
    { label: "Project Alpha", actual: 70, target: 90 },
    { label: "Project Beta", actual: 50, target: 80 },
    { label: "Project Gamma", actual: 85, target: 85 },
    { label: "Project Delta", actual: 40, target: 75 },
  ];

  // Report progress
  const reports = [
    { name: "Q1 Report", percent: 65 },
    { name: "Q2 Report", percent: 45 },
    { name: "Audit Report", percent: 80 },
    { name: "Risk Report", percent: 30 },
  ];

  const employeeTrend = [
    { label: "Hires", value: 150 },
    { label: "Attrition", value: 48 },
  ];

  const productivity = [
    { day: "Mon", value: 6.8 },
    { day: "Tue", value: 7.0 },
    { day: "Wed", value: 7.2 },
    { day: "Thu", value: 7.4 },
    { day: "Fri", value: 7.3 },
    { day: "Sat", value: 7.5 },
    { day: "Sun", value: 7.6 },
  ];

  const topDepts = [
    { name: "Sales", delta: "+12%" },
    { name: "Development", delta: "+9%" },
    { name: "HR", delta: "+4%" },
  ];
  const riskDepts = [
    { name: "DevOps", issue: "Delivery slippage" },
    { name: "QA", issue: "High defect ratio" },
  ];

  const notifications = [
    "⚠ Project Alpha delay → potential $1.2M revenue risk",
    "👥 HR Attrition > 5% → delivery capacity at risk",
    "📈 Sales exceeded Q3 target by 12%",
  ];

  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <div className="ov-container">
      {/* Header */}
      <header className="ov-header">
        <div>
          <h1 className="ov-title">
            Good Morning, Siva <span className="ov-wave"></span>
          </h1>
          <p className="ov-sub">{today}</p>
        </div>
        <div className="ov-actions">
          <button className="btn ghost">Export Report</button>
          <button className="btn primary">Create Brief</button>
        </div>
      </header>

      {/* KPI Cards */}
      <section className="kpi-grid">
        {kpis.map((k, i) => (
          <div key={i} className="kpi-card">
            <div className="kpi-accent" style={{ background: k.accent }} />
            <div className="kpi-title">{k.title}</div>
            <div className="kpi-value">{k.value}</div>
          </div>
        ))}
      </section>

      {/* Trend Cards */}
      <section className="row-3">
        {/* Progress vs Target */}
        <div className="card">
          <div className="card-head">
            <h3>Progress vs Target</h3>
          </div>
          <div className="progress-list">
            {progressData.map((p, i) => (
              <div key={i} className="progress-item">
                <span className="progress-label">{p.label}</span>
                <div className="progress-track">
                  <div
                    className="progress-bar target"
                    style={{ width: `${p.target}%` }}
                  />
                  <div
                    className="progress-bar actual"
                    style={{ width: `${p.actual}%` }}
                  />
                </div>
                <div className="progress-meta">
                  <span>{p.actual}%</span>/<span>{p.target}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Growth vs Attrition */}
        <div className="card">
          <div className="card-head">
            <h3>Employee Growth vs Attrition</h3>
          </div>
          <div className="stack-bars">
            {employeeTrend.map((e, i) => (
              <div key={i} className="stack">
                <div className="stack-label">{e.label}</div>
                <div className="stack-track">
                  <div
                    className={`stack-fill ${
                      e.label === "Hires" ? "green" : "red"
                    }`}
                    style={{ width: `${Math.min(100, e.value)}%` }}
                    title={e.value}
                  />
                </div>
                <div className="stack-value">{e.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reports Progress (Circular) */}
        <div className="card">
          <div className="card-head">
            <h3>Reports</h3>
          </div>
          <div className="report-circles">
            {reports.map((r, i) => {
              const radius = 36;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (r.percent / 100) * circumference;

              return (
                <div key={i} className="circle-item">
                  <svg className="circle-svg" width="90" height="90">
                    <circle
                      className="circle-bg"
                      cx="45"
                      cy="45"
                      r={radius}
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      className={`circle-fill ${
                        r.percent >= 70
                          ? "green"
                          : r.percent >= 40
                          ? "yellow"
                          : "red"
                      }`}
                      cx="45"
                      cy="45"
                      r={radius}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                    />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      className="circle-text"
                    >
                      {r.percent}%
                    </text>
                  </svg>
                  <span className="circle-label">{r.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="row-2">
        <div className="card">
          <div className="card-head">
            <h3>Top Departments</h3>
          </div>
          <ul className="list">
            {topDepts.map((d, i) => (
              <li key={i} className="list-item ok">
                <span>
                  {i + 1}. {d.name}
                </span>
                <b>{d.delta}</b>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>At-Risk Departments</h3>
          </div>
          <ul className="list">
            {riskDepts.map((d, i) => (
              <li key={i} className="list-item warn">
                <span>{d.name}</span>
                <em>{d.issue}</em>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Notifications */}
      <section className="card wide">
        <div className="card-head">
          <h3>Notifications</h3>
        </div>
        <ul className="notif">
          {notifications.map((n, i) => (
            <li key={i} className="notif-item">
              {n}
            </li>
          ))}
        </ul>

        {/* Quick actions */}
        <div className="quick-row">
          <Link href="/superadmin/employees" className="btn light">
            Add Employee
          </Link>
          <Link href="/superadmin/projects" className="btn light">
            Add Project
          </Link>
          <Link href="/superadmin/overview" className="btn light">
            Department Health
          </Link>
          <button className="btn dark">Generate Report</button>
        </div>
      </section>
    </div>
  );
}
