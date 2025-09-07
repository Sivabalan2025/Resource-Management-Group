"use client";
import "./content.css";

export default function ContentPage() {
  const projects = [
    {
      projectName: "Blog Series",
      teamLead: "Emily Davis",
      teamMembers: ["Sophia", "Liam", "Mason"],
      milestone: "Publish 5 SEO-optimized blogs",
      priority: "High",
      progress: 70,
    },
    {
      projectName: "Email Newsletter",
      teamLead: "John Carter",
      teamMembers: ["Olivia", "Noah"],
      milestone: "Design & send monthly newsletter",
      priority: "Medium",
      progress: 50,
    },
    {
      projectName: "Ad Copywriting",
      teamLead: "Ava Martinez",
      teamMembers: ["Ethan", "Isabella"],
      milestone: "Create ad copies for summer campaign",
      priority: "High",
      progress: 40,
    },
    {
      projectName: "Case Study Report",
      teamLead: "William Brown",
      teamMembers: ["James", "Charlotte"],
      milestone: "Complete client success story draft",
      priority: "Low",
      progress: 25,
    },
  ];

  return (
    <div className="content-container">
      <h1 className="content-title">Content Team Projects</h1>
      <p className="content-subtitle">
        The Content Team crafts engaging blogs, newsletters, and ad copies to
        support marketing initiatives.
      </p>

      <div className="content-grid">
        {projects.map((project, index) => {
          let statusClass =
            project.priority === "High"
              ? "status-high"
              : project.priority === "Medium"
              ? "status-medium"
              : "status-low";

          return (
            <div key={index} className="content-card">
              <h3>{project.projectName}</h3>
              <p><strong>Team Lead:</strong> {project.teamLead}</p>
              <p><strong>Members:</strong> {project.teamMembers.join(", ")}</p>
              <p><strong>Milestone:</strong> {project.milestone}</p>
              <p className={`status-badge ${statusClass}`}>
                {project.priority} Priority
              </p>

              {/* Circular progress bar */}
              <div className="circular-progress">
                <svg viewBox="0 0 36 36">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray={`${project.progress}, 100`}
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="circle-text">{project.progress}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
