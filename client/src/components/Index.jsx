import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import mchanaLogo from "../assets/mchana-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-8 py-3 transition-all duration-300 z-50 ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center space-x-3">
        <img src={mchanaLogo} alt="logo" className="w-10 h-10" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Mchana
        </h2>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          to="/"
          className={`font-medium transition ${
            location.pathname === "/"
              ? "text-yellow-500"
              : "text-gray-800 dark:text-gray-300 hover:text-yellow-500"
          }`}
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="text-gray-800 dark:text-gray-300 hover:text-yellow-500 transition"
        >
          Menu
        </Link>
        <Link
          to="/events"
          className="text-gray-800 dark:text-gray-300 hover:text-yellow-500 transition"
        >
          Events
        </Link>
        <Link
          to="/contact"
          className="text-gray-800 dark:text-gray-300 hover:text-yellow-500 transition"
        >
          Contact
        </Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border border-gray-700 dark:border-gray-300 text-black dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="px-4 py-2 border border-gray-700 dark:border-gray-300 text-black dark:text-white rounded hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition hidden sm:inline-flex">
          Login
        </button>
      </nav>

      <button
        className="md:hidden text-gray-800 dark:text-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-40">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 dark:text-gray-300 hover:text-yellow-500 transition"
          >
            Home
          </Link>
          <Link
            to="/menu"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 dark:text-gray-300 hover:text-yellow-500 transition"
          >
            Menu
          </Link>
          <Link
            to="/events"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 dark:text-gray-300 hover:text-yellow-500 transition"
          >
            Events
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 dark:text-gray-300 hover:text-yellow-500 transition"
          >
            Contact
          </Link>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="px-4 py-2 border border-gray-700 dark:border-gray-300 text-black dark:text-white rounded hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </header>
  );
}
