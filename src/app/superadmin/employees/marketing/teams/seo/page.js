"use client";
import "./seo.css";

export default function SEOPage() {
  const employees = [
    {
      id: "SEO001",
      name: "Emma Wilson",
      phone: "+91 98765 43210",
      role: "Team Lead",
      experience: "7 years",
      currentProject: "Website Optimization",
      avatar: "https://ui-avatars.com/api/?name=Emma+Wilson&background=3b82f6&color=ffffff&size=80",
    },
    {
      id: "SEO002",
      name: "Daniel Brown",
      phone: "+91 91234 56789",
      role: "Keyword Researcher",
      experience: "4 years",
      currentProject: "Keyword Research",
      avatar: "https://ui-avatars.com/api/?name=Daniel+Brown&background=3b82f6&color=ffffff&size=80",
    },
    {
      id: "SEO003",
      name: "Ava Johnson",
      phone: "+91 99887 66554",
      role: "Backlink Specialist",
      experience: "5 years",
      currentProject: "Backlink Strategy",
      avatar: "https://ui-avatars.com/api/?name=Ava+Johnson&background=3b82f6&color=ffffff&size=80",
    },
    {
      id: "SEO004",
      name: "Ethan Smith",
      phone: "+91 90012 34567",
      role: "Content SEO Expert",
      experience: "3 years",
      currentProject: "Content SEO",
      avatar: "https://ui-avatars.com/api/?name=Ethan+Smith&background=3b82f6&color=ffffff&size=80",
    },
  ];

  return (
    <div className="seo-container">
      <h1 className="seo-title">SEO Team</h1>
      <p className="seo-subtitle">
        Profiles and assignments of our SEO experts improving our digital presence.
      </p>

      <div className="seo-grid">
        {employees.map((emp, index) => (
          <div key={index} className="seo-card">
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
