import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div 
      className="relative inline-flex items-center bg-card border-2 border-border rounded-full p-1 floating-element cursor-pointer transition-all hover:border-primary/50"
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle theme"
    >
      <div className="relative flex items-center gap-1">
        <div
          className={`absolute inset-y-0 w-[calc(50%-2px)] bg-primary rounded-full transition-all duration-300 ease-out ${
            theme === "light" ? "left-1" : "left-[calc(50%+1px)]"
          }`}
        />
        
        <button
          className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
            theme === "light" ? "text-primary-foreground" : "text-foreground/60"
          }`}
        >
          <Sun className="h-4 w-4" />
        </button>
        
        <button
          className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
            theme === "dark" ? "text-primary-foreground" : "text-foreground/60"
          }`}
        >
          <Moon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
