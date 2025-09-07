"use client";
import "./sidebar.css";   // 👈 import CSS here
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Folder, Clock } from "lucide-react";

const menuItems = [
  { name: "Overview", href: "/superadmin/overview", icon: Home },
  { name: "Employees", href: "/superadmin/employees", icon: Users },
  { name: "Projects", href: "/superadmin/projects", icon: Folder },
  { name: "Time Tracking", href: "/superadmin/timetracking", icon: Clock },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">Team Optix</div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`sidebar-link ${active ? "active" : ""}`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
