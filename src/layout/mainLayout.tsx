import { JSX } from "solid-js";
import { Navbar } from "../components/nav";

interface LayoutProps {
  children?: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div class="drawer lg:drawer-open">
      <input id="main-drawer" type="checkbox" class="drawer-toggle" />

      {/* Main content area */}
      <div class="drawer-content flex flex-col">
        {/* Header */}
        <header class="sticky top-0 z-10 bg-base-100 h-16 flex items-center shadow-sm">
          <label
            for="main-drawer"
            class="btn btn-square btn-ghost drawer-button lg:hidden ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </header>

        {/* Main content */}
        <main class="flex-1 p-4 bg-base-100">{children}</main>
      </div>

      {/* Sidebar */}
      <div class="drawer-side z-20">
        <label for="main-drawer" class="drawer-overlay"></label>
        <aside class="w-70 h-full bg-base-200">
          <Navbar />
        </aside>
      </div>
    </div>
  );
}
