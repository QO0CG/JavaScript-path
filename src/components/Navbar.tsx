import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/international", label: "مصادر أجنبية" },
    { to: "/arabic", label: "مصادر عربية" },
    { to: "/courses", label: "كورسات وكتب" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Floating Badge Style */}
          <Link to="/" className="group">
            <div className="flex items-center gap-3 px-4 py-2 bg-card rounded-full border-2 border-border floating-element transition-all hover:border-primary/50">
              <div className="relative">
                <Code2 className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-primary via-accent to-accent-glow bg-clip-text text-transparent">
                تعلم JavaScript
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  isActive(link.to)
                    ? "text-primary-foreground bg-primary shadow-lg shadow-primary/30"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-sm" />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button - Floating Style */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="w-12 h-12 rounded-full bg-card border-2 border-border floating-element flex items-center justify-center transition-all hover:border-primary/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive(link.to)
                      ? "text-primary-foreground bg-primary shadow-lg shadow-primary/30"
                      : "text-foreground hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
