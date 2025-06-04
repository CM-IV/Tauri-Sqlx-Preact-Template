// components/nav/colorscheme.tsx
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useEffect, useState } from "preact/hooks";

export function ColorScheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme =
      savedTheme || (systemPrefersDark ? "dracula" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dracula" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div class="flex items-center gap-2">
      <label class="swap swap-rotate">
        <input
          type="checkbox"
          checked={theme === "dracula"}
          onChange={toggleTheme}
        />
        {theme !== "dracula" ? (
          <IconSun class="swap-on size-5" stroke="1.5" />
        ) : (
          <IconMoon class="swap-off size-5" stroke="1.5" />
        )}
      </label>
    </div>
  );
}
