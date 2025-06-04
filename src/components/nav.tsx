import { Link, useLocation } from "wouter-preact";
import { ColorScheme } from "./colorscheme";
import {
  IconDashboard,
  IconBriefcase2,
  IconUserCheck,
  IconBuildingEstate,
  IconInvoice,
} from "@tabler/icons-react";

const navLinks = [
  { link: "/", label: "Dashboard", icon: IconDashboard },
  { link: "/services", label: "Services", icon: IconBriefcase2 },
  { link: "/customers", label: "Customers", icon: IconUserCheck },
  { link: "/properties", label: "Properties", icon: IconBuildingEstate },
  { link: "/invoices", label: "Invoices", icon: IconInvoice },
];

const NavBar = () => {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location === path;
    return location.startsWith(path);
  };

  return (
    <div className="flex flex-col h-full p-4 bg-base-200 border-r border-base-300 w-70">
      {/* Header section */}
      <div className="flex justify-between items-center mb-6 px-2">
        <span className="font-mono text-xs text-base-content/70 tracking-wider">
          v0.0.1
        </span>
      </div>

      {/* Main navigation */}
      <nav className="flex-1">
        <ul className="menu space-y-1">
          {navLinks.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={`flex items-center gap-3 py-3 px-8 rounded-lg transition-all duration-200 ${
                  isActive(item.link)
                    ? "bg-primary text-primary-content shadow-md"
                    : "hover:bg-base-300 hover:text-base-content"
                }`}
              >
                <item.icon
                  size={20}
                  stroke={isActive(item.link) ? "2" : "1.75"}
                  className="flex-shrink-0"
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer section */}
      <footer className="pt-4 mt-auto border-t border-base-300">
        <div className="flex justify-center p-2">
          <ColorScheme />
        </div>
      </footer>
    </div>
  );
};

export { NavBar };
