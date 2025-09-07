"use client";
import "./event.css";

export default function EventsPage() {
  const projects = [
    {
      projectName: "Product Launch Event",
      teamLead: "Michael Scott",
      teamMembers: ["Pam", "Jim", "Dwight"],
      milestone: "Venue booking and invites",
      priority: "High",
      progress: 60,
    },
    {
      projectName: "Client Appreciation Gala",
      teamLead: "Angela Martin",
      teamMembers: ["Oscar", "Kevin"],
      milestone: "Finalize catering & guest list",
      priority: "Medium",
      progress: 45,
    },
    {
      projectName: "Webinar Series",
      teamLead: "Stanley Hudson",
      teamMembers: ["Phyllis", "Kelly"],
      milestone: "Prepare webinar content & speaker",
      priority: "High",
      progress: 70,
    },
    {
      projectName: "Annual Conference",
      teamLead: "Andy Bernard",
      teamMembers: ["Erin", "Creed", "Meredith"],
      milestone: "Logistics & sponsorships",
      priority: "Low",
      progress: 30,
    },
  ];

  // Assign badge color based on priority
  const getStatusClass = (priority) => {
    switch (priority) {
      case "High":
        return "status-badge status-high";
      case "Medium":
        return "status-badge status-medium";
      case "Low":
        return "status-badge status-low";
      default:
        return "status-badge";
    }
  };

  return (
    <div className="events-container">
      <h1 className="events-title">Events Team Projects</h1>
      <p className="events-subtitle">
        The Events Team organizes impactful product launches, webinars, and client engagement events.
      </p>

      <div className="events-grid">
        {projects.map((project, index) => {
          const radius = 42;
          const circumference = 2 * Math.PI * radius;
          const offset =
            circumference - (project.progress / 100) * circumference;

          return (
            <div key={index} className="events-card">
              <h3>{project.projectName}</h3>
              <p><strong>Team Lead:</strong> {project.teamLead}</p>
              <p><strong>Members:</strong> {project.teamMembers.join(", ")}</p>
              <p><strong>Milestone:</strong> {project.milestone}</p>
              <span className={getStatusClass(project.priority)}>
                {project.priority} Priority
              </span>

              {/* Circular Progress */}
              <div className="circular-progress">
                <svg>
                  <circle
                    className="circle-bg"
                    cx="50%"
                    cy="50%"
                    r={radius}
                  />
                  <circle
                    className="circle"
                    cx="50%"
                    cy="50%"
                    r={radius}
                    style={{
                      strokeDasharray: circumference,
                      strokeDashoffset: offset,
                    }}
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
