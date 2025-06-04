import {
  IconBuildingEstate,
  IconInvoice,
  IconBriefcase2,
  IconDashboard,
  IconUserCheck,
} from "@tabler/icons-solidjs";
import { ColorScheme } from "./colorscheme";
import { A, useLocation } from "@solidjs/router";

const navLinks = [
  { link: "/", label: "Dashboard", icon: IconDashboard },
  { link: "/services", label: "Services", icon: IconBriefcase2 },
  { link: "/customers", label: "Customers", icon: IconUserCheck },
  { link: "/properties", label: "Properties", icon: IconBuildingEstate },
  { link: "/invoices", label: "Invoices", icon: IconInvoice },
];

export function Navbar() {
  const location = useLocation();
  const url = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return url === path;
    }
    return url.startsWith(path); // Partial match for other routes
  };

  return (
    <div class="flex flex-col h-full p-4 bg-base-200 border-r border-base-300 w-70">
      {/* Header section */}
      <div class="flex justify-between items-center mb-6 px-2">
        <span class="font-mono text-xs text-base-content/70 tracking-wider">
          v0.0.1
        </span>
      </div>

      {/* Main navigation */}
      <nav class="flex-1">
        <ul class="menu space-y-1">
          {navLinks.map((item) => (
            <li>
              <A
                href={item.link}
                class={`flex items-center gap-3 py-3 px-8 rounded-lg transition-all duration-200
                  ${
                    isActive(item.link)
                      ? "active bg-primary text-primary-content shadow-md"
                      : "hover:bg-base-300 hover:text-base-content"
                  }`}
                activeClass="active"
              >
                <item.icon
                  size={20}
                  stroke={isActive(item.link) ? "2" : "1.75"}
                  class="flex-shrink-0"
                />
                <span class="text-sm font-medium">{item.label}</span>
              </A>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer section */}
      <footer class="pt-4 mt-auto border-t border-base-300">
        <div class="flex justify-center p-2">
          <ColorScheme />
        </div>
      </footer>
    </div>
  );
}
