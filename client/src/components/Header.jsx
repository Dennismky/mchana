import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import mchanaLogo from "../images/mchana-logo.jpg";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-8 py-3 transition-all duration-300 z-50 ${
        scrolled ? "backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-lg" : "bg-transparent"
      }`}
    >
    
      <Link
        to="/"
        className="flex flex-col items-center space-y-1 hover:opacity-80 transition"
      >
        <img
          src={mchanaLogo}
          alt="Mchana Logo"
          className="w-16 h-16 rounded-full object-cover shadow-lg"
        />
        <h2 className="text-lg font-bold tracking-wide">
          Mchana
        </h2>
      </Link>

   
      <nav className="hidden md:flex space-x-8 text-base font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`hover:text-red-500 transition relative ${
              isActive(link.path) ? "text-red-500" : ""
            }`}
          >
            {link.name}
            {isActive(link.path) && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500" />
            )}
          </Link>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition hidden sm:inline-flex">
          Login
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition hidden sm:inline-flex">
          Sign Up
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 border rounded-full transition"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <button
          className="md:hidden p-2 border rounded-full"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

     
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md p-6 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium hover:text-red-500 transition ${
                  isActive(link.path) ? "text-red-500" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-300 dark:border-gray-700 flex gap-3">
              <button className="flex-1 px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                Login
              </button>
              <button className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
