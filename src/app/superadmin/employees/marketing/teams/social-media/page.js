"use client";
import "./social.css";

export default function SocialMediaPage() {
  const employees = [
    {
      id: "SM001",
      name: "Amit Sharma",
      phone: "+91 98765 43210",
      role: "Team Lead",
      experience: "6 years",
      currentProject: "Digital Marketing Strategy",
      avatar: "https://ui-avatars.com/api/?name=Amit+Sharma&background=3b82f6&color=ffffff&size=80",
    },
    {
      id: "SM002",
      name: "Neha Singh",
      phone: "+91 91234 56789",
      role: "Content Strategist",
      experience: "4 years",
      currentProject: "Social Media Engagement",
      avatar: "https://ui-avatars.com/api/?name=Neha+Singh&background=3b82f6&color=ffffff&size=80",
    },
    {
      id: "SM003",
      name: "Rohit Verma",
      phone: "+91 99887 66554",
      role: "Social Media Analyst",
      experience: "3 years",
      currentProject: "Brand Awareness Campaign",
      avatar: "https://ui-avatars.com/api/?name=Rohit+Verma&background=3b82f6&color=ffffff&size=80",
    },
    {
      id: "SM004",
      name: "Pooja Mehta",
      phone: "+91 90012 34567",
      role: "Ad Campaign Manager",
      experience: "5 years",
      currentProject: "Product Launch Plan",
      avatar: "https://ui-avatars.com/api/?name=Pooja+Mehta&background=3b82f6&color=ffffff&size=80",
    },
  ];

  return (
    <div className="social-container">
      <h1 className="social-title">Social Media Team</h1>
      <p className="social-subtitle">
        Employee profiles and current assignments within the Social Media Team.
      </p>

      <div className="social-grid">
        {employees.map((emp, index) => (
          <div key={index} className="social-card">
            <div className="top-right-section">
              <img src={emp.avatar} alt={emp.name} className="avatar" />
              <div className="employee-id">{emp.id}</div>
            </div>
            <div className="employee-details">
              <p className="name">{emp.name}</p>
              <p className="role">{emp.role}</p>
              <p><strong>Experience:</strong> {emp.experience}</p>
              <p><strong>Current Project:</strong> {emp.currentProject}</p>
              <p className="phone"><strong>Phone:</strong> {emp.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
