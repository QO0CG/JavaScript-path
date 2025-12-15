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
    <button 
      className="relative flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-full px-2 py-1.5 floating-element cursor-pointer transition-all duration-300 hover:border-primary/50 hover:scale-105"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {/* Day button */}
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          theme === "light" 
            ? "bg-amber-400 text-amber-900 shadow-md shadow-amber-400/50" 
            : "bg-muted/50 text-muted-foreground hover:bg-muted"
        }`}
      >
        <Sun className="h-4 w-4" />
      </div>
      
      {/* Night button */}
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          theme === "dark" 
            ? "bg-indigo-500 text-indigo-100 shadow-md shadow-indigo-500/50" 
            : "bg-muted/50 text-muted-foreground hover:bg-muted"
        }`}
      >
        <Moon className="h-4 w-4" />
      </div>
    </button>
  );
}
