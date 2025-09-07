import Link from "next/link";
import "./page.css"; // make sure global styles load

export default function HomePage() {
  return (
    <div className="landing-container">
      <div className="landing-card">
        <h1>Welcome to RMG System</h1>
        <p>Manage employees, projects, and time tracking with ease.</p>
        <Link href="/superadmin">
          <button className="landing-btn">Go to Superadmin Dashboard</button>
        </Link>
      </div>
    </div>
  );
}
