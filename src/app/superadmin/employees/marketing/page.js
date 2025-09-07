"use client";

import Link from "next/link";
import {
  MessageSquare,
  BarChart2,
  FileText,
  Calendar
} from "lucide-react";
import "./marketing.css";

export default function MarketingPage() {
  return (
    <div className="department-container">
      <h1 className="department-title">Marketing Department</h1>
      <p className="department-subtitle">
        Driving brand awareness, customer engagement, and market strategies.
      </p>

      <div className="team-grid two-rows">
        <Link
          href="/superadmin/employees/marketing/teams/social-media"
          className="team-card"
        >
          <div className="emoji-circle social">
            <MessageSquare size={28} />
          </div>
          <h3>Social Media Team</h3>
          <p>Manages all social media campaigns and brand presence.</p>
        </Link>

        <Link
          href="/superadmin/employees/marketing/teams/seo"
          className="team-card"
        >
          <div className="emoji-circle seo">
            <BarChart2 size={28} />
          </div>
          <h3>SEO Team</h3>
          <p>Optimizes website rankings and manages search engine strategies.</p>
        </Link>

        <Link
          href="/superadmin/employees/marketing/teams/content"
          className="team-card"
        >
          <div className="emoji-circle content">
            <FileText size={28} />
          </div>
          <h3>Content Team</h3>
          <p>Creates blogs, newsletters, and ad copies.</p>
        </Link>

        <Link
          href="/superadmin/employees/marketing/teams/event"
          className="team-card"
        >
          <div className="emoji-circle event">
            <Calendar size={28} />
          </div>
          <h3>Events Team</h3>
          <p>Organizes marketing events and promotions.</p>
        </Link>
      </div>
    </div>
  );
}
