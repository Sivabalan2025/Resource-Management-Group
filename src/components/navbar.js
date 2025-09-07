import { Bell, User } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Left side */}
      <div className="navbar-left">
        <h1>Superadmin Dashboard</h1>
      </div>

      {/* Right side */}
      <div className="navbar-right">
        <div className="notification">
          <Bell size={18} />
        </div>
        <div className="profile">
          <User size={20} />
          <span>Superadmin</span>
        </div>
      </div>
    </div>
  );
}
