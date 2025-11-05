import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";

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
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
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
        scrolled ? "bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-md" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <Link to="/" className="flex flex-col items-center space-y-1 hover:opacity-80 transition">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-yellow-400 flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-white">M</span>
        </div>
        <h2 className="text-lg font-bold tracking-wide dark:text-white">Mchana</h2>
      </Link>

      <nav className="hidden md:flex space-x-8 text-base font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`hover:text-red-500 dark:hover:text-yellow-400 transition-colors ${
              isActive(link.path)
                ? "text-red-600 dark:text-yellow-300 font-semibold"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 border border-gray-700 dark:border-gray-300 text-black dark:text-white rounded hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition hidden sm:inline-flex">
          Login
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition hidden sm:inline-flex">
          Sign Up
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 border rounded-full dark:border-gray-400"
        >
          {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 border rounded-full dark:border-gray-400"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t dark:border-gray-700 p-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium hover:text-red-500 dark:hover:text-yellow-400 ${
                  isActive(link.path)
                    ? "text-red-600 dark:text-yellow-300"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
