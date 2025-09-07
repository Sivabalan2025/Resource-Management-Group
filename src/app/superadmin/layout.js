// src/app/superadmin/layout.js
"use client";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import "./layout.css";

export default function SuperadminLayout({ children }) {
  return (
    <div className="superadmin-layout">
      <Sidebar />
      <div className="superadmin-content">
        <Navbar />
        <div className="superadmin-main">
          {children}
        </div>
      </div>
    </div>
  );
}
