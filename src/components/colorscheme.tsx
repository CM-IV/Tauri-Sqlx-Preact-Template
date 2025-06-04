import { onMount } from "solid-js";
import { themeChange } from "theme-change";
import { IconSun, IconMoon } from "@tabler/icons-solidjs";

export function ColorScheme() {
  onMount(() => {
    themeChange(false);
  });

  return (
    <div class="flex items-center gap-2">
      <label class="swap swap-rotate">
        <input
          type="checkbox"
          data-toggle-theme="light,dracula"
          data-act-class="swap-active"
        />

        <IconSun class="swap-on size-5" stroke={"1.5"} />

        <IconMoon class="swap-off size-5" stroke={"1.5"} />
      </label>
    </div>
  );
}
