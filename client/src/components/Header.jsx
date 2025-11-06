import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  const loginRef = useRef();
  const signupRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showLogin && loginRef.current && !loginRef.current.contains(e.target)) {
        setShowLogin(false);
      }
      if (showSignup && signupRef.current && !signupRef.current.contains(e.target)) {
        setShowSignup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showLogin, showSignup]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-3 transition-all duration-300
          ${darkMode ? "bg-[hsl(0,0%,10%)]" : "bg-[hsl(0,0%,95%)]"}
          ${scrolled ? "shadow-elegant" : ""}
        `}
      >
        <Link
          to="/"
          className="flex flex-col items-center space-y-1 transition"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-elegant">
            <span className="text-2xl font-bold text-primary-foreground">M</span>
          </div>
          <h2 className="text-lg font-bold tracking-wide text-foreground dark:text-primary-foreground">
            Mchana
          </h2>
        </Link>

        <nav className="hidden md:flex space-x-8 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-primary dark:hover:text-accent transition-colors ${
                isActive(link.path)
                  ? "text-primary dark:text-accent font-semibold"
                  : "text-foreground dark:text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
            className="px-4 py-2 border rounded text-foreground dark:text-primary-foreground border-border dark:border-muted-foreground hover:bg-muted dark:hover:bg-muted-foreground transition hidden sm:inline-flex"
          >
            Login
          </button>
          <button
            onClick={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition hidden sm:inline-flex"
          >
            Sign Up
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border rounded-full border-border dark:border-muted-foreground"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-accent" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border rounded-full border-border dark:border-muted-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full p-6 md:hidden glass-card animate-fade-in bg-[hsl(0,0%,95%)] dark:bg-[hsl(0,0%,10%)]">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium hover:text-primary dark:hover:text-accent ${
                    isActive(link.path)
                      ? "text-primary dark:text-accent"
                      : "text-foreground dark:text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setShowSignup(false);
                  setShowLogin(true);
                  setMobileMenuOpen(false);
                }}
                className="mt-4 px-4 py-2 border rounded text-foreground dark:text-primary-foreground border-border dark:border-muted-foreground hover:bg-muted dark:hover:bg-muted-foreground transition"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowLogin(false);
                  setShowSignup(true);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition"
              >
                Sign Up
              </button>
            </nav>
          </div>
        )}
      </header>

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
          <div ref={loginRef}>
            <LoginCard onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
          <div ref={signupRef}>
            <SignupCard onClose={() => setShowSignup(false)} />
          </div>
        </div>
      )}
    </>
  );
}
