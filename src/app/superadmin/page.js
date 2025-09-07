"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./dashboard.css";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  const kpis = [
    { title: "Total Employees", value: "220", accent: "#f7b500" },
    { title: "Total Projects", value: "18", accent: "#10b981" },
    { title: "Assign Projects", value: "14", accent: "#3b82f6" },
    { title: "Report", value: "14", accent: "#8b5cf6" },
  ];

  const progressData = [
    { label: "Project Alpha", actual: 70, target: 90 },
    { label: "Project Beta", actual: 50, target: 80 },
    { label: "Project Gamma", actual: 85, target: 85 },
    { label: "Project Delta", actual: 40, target: 75 },
  ];

  const reports = [
    { name: "Q1 Report", percent: 65 },
    { name: "Q2 Report", percent: 45 },
    { name: "Audit Report", percent: 80 },
    { name: "Risk Report", percent: 30 },
  ];

  const employeeTrendData = [
    { month: "Jan", hires: 20, attrition: 5 },
    { month: "Feb", hires: 25, attrition: 8 },
    { month: "Mar", hires: 18, attrition: 12 },
    { month: "Apr", hires: 30, attrition: 6 },
    { month: "May", hires: 22, attrition: 10 },
    { month: "Jun", hires: 28, attrition: 7 },
    { month: "Jul", hires: 26, attrition: 9 },
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
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="white"/>
        </svg>
      ),
      color: "linear-gradient(135deg, #f59e0b, #d97706)",
      text: "Project Alpha delay → potential $1.2M revenue risk",
      time: "2 mins ago"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="white"/>
        </svg>
      ),
      color: "linear-gradient(135deg, #10b981, #047857)",
      text: "HR Attrition > 5% → delivery capacity at risk",
      time: "10 mins ago"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 17h2v-7H3v7zm4 0h2v-4H7v4zm4 0h2v-10h-2v10zm4 0h2v-6h-2v6zm4 0h2v-2h-2v2z" fill="white"/>
        </svg>
      ),
      color: "linear-gradient(135deg, #3b82f6, #1e40af)",
      text: "Sales exceeded Q3 target by 12%",
      time: "1 hour ago"
    }
  ];

  const recentProjects = [
    { name: "Project Zeta", lastAccess: "5 mins ago", status: "Active", manager: "Balaji" },
    { name: "Project Theta", lastAccess: "1 hour ago", status: "Review", manager: "Deepak" },
    { name: "Project Lambda", lastAccess: "Yesterday", status: "Pending", manager: "Siva" },
  ];

  const maxHires = Math.max(...employeeTrendData.map(d => d.hires));
  const maxAttrition = Math.max(...employeeTrendData.map(d => d.attrition));
  const maxY = Math.max(maxHires, maxAttrition) + 5;
  const chartHeight = 150;
  const chartWidth = 300;
  const padding = 40;

  const points = employeeTrendData.map((d, i) => {
    const x = (i / (employeeTrendData.length - 1)) * (chartWidth - padding * 2) + padding;
    const yHires = chartHeight - (d.hires / maxY) * chartHeight;
    const yAttrition = chartHeight - (d.attrition / maxY) * chartHeight;
    return { x, yHires, yAttrition, month: d.month };
  });

  const hiresPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.yHires}`).join(' ');
  const attritionPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.yAttrition}`).join(' ');

  return (
    <div className="ov-container">
      <header className="ov-header">
        <div>
          <h1 className="ov-title">Good Morning, Siva <span className="ov-wave">👋</span></h1>
          <p className="ov-sub">{today}</p>
        </div>
        <div className="ov-actions">
          <button className="btn ghost" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button className="btn primary">Create Brief</button>
        </div>
      </header>

      <section className="kpi-grid">
        {kpis.map((k, i) => (
          <div key={i} className="kpi-card">
            <div className="kpi-accent" style={{ background: k.accent }} />
            <div className="kpi-title">{k.title}</div>
            <div className="kpi-value">{k.value}</div>
          </div>
        ))}
      </section>

      <section className="row-3">
        <div className="card">
          <div className="card-head">
            <h3>Progress vs Target</h3>
          </div>
          <div className="progress-list">
            {progressData.map((p, i) => (
              <div key={i} className="progress-item">
                <span className="progress-label">{p.label}</span>
                <div className="progress-track">
                  <div className="progress-bar target" style={{ width: `${p.target}%` }} />
                  <div className="progress-bar actual" style={{ width: `${p.actual}%` }} />
                </div>
                <div className="progress-meta">
                  <span>{p.actual}%</span>/<span>{p.target}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>Employee Growth vs Attrition</h3>
            <p className="card-sub">Monthly overview of hiring trends and attrition patterns</p>
          </div>
          <div className="employee-stats">
            <div className="stat-item">
              <div className="stat-title">Total Employees</div>
              <div className="stat-value">220</div>
            </div>
            <div className="stat-item">
              <div className="stat-title">New Hires</div>
              <div className="stat-value green">+18 this month</div>
            </div>
            <div className="stat-item">
              <div className="stat-title">Attrition Rate</div>
              <div className="stat-value red">5.8%</div>
            </div>
          </div>
          <div className="employee-chart-container">
            <svg width={chartWidth} height={chartHeight}>
              <line x1={padding} y1={0} x2={padding} y2={chartHeight} stroke="#ccc" />
              <line x1={padding} y1={chartHeight} x2={chartWidth - padding} y2={chartHeight} stroke="#ccc" />
              <path d={hiresPath} fill="none" stroke="#10b981" strokeWidth="2" />
              <path d={attritionPath} fill="none" stroke="#ef4444" strokeWidth="2" />
              {points.map((p, i) => (
                <circle key={`h${i}`} cx={p.x} cy={p.yHires} r="4" fill="#10b981" />
              ))}
              {points.map((p, i) => (
                <circle key={`a${i}`} cx={p.x} cy={p.yAttrition} r="4" fill="#ef4444" />
              ))}
            </svg>
            <div className="chart-labels">
              {points.map((p, i) => (
                <div key={i} className="chart-label">{p.month}</div>
              ))}
            </div>
          </div>
        </div>

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
                      className={`circle-fill ${r.percent >= 70 ? "green" : r.percent >= 40 ? "yellow" : "red"}`}
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

      <section className="row-2">
        <div className="card">
          <div className="card-head">
            <h3>Top Departments</h3>
          </div>
          <ul className="list">
            {topDepts.map((d, i) => (
              <li key={i} className="list-item ok">
                <span>{i + 1}. {d.name}</span>
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

      <section className="row-2">
        <div className="card">
          <div className="card-head">
            <h3>Recent Projects</h3>
          </div>
          <ul className="recent-list">
            {recentProjects.map((p, i) => (
              <li key={i} className="recent-item">
                <div className="recent-name">{p.name}</div>
                <div className="recent-status">{p.status}</div>
                <div className="recent-details">
                  <span>Last Access: {p.lastAccess}</span>
                  <span>Manager: {p.manager}</span>
                </div>
                <div className={`status-bar ${p.status.toLowerCase()}`}></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card wide">
          <div className="card-head">
            <h3>Notifications</h3>
          </div>
          <ul className="notif">
            {notifications.map((n, i) => (
              <li key={i} className="notif-item">
                <div className="notif-icon" style={{ backgroundImage: n.color }}>
                  {n.icon}
                </div>
                <div className="notif-content">
                  <div className="notif-text">{n.text}</div>
                  <div className="notif-time">{n.time}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="quick-row">
            <Link href="#" className="btn light">Add Employee</Link>
            <Link href="#" className="btn light">Add Project</Link>
            <Link href="#" className="btn light">Department Health</Link>
            <button className="btn dark">Generate Report</button>
          </div>
        </div>
      </section>
    </div>
  );
}
