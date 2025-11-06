// SignupCard.jsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignupCard({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const modalRef = useRef(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Signup successful! Please log in.");
        onClose();
      } else {
        toast.error(data.error || "Signup failed.");
      }
    } catch (error) {
      toast.error("Network error. Try again later.");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log("Clicked outside modal");  // debug log
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 flex items-center justify-center z-[100] bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[hsl(0,0%,15%)] text-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md border border-gray-700"
        >
          <button
            type="button"
            onClick={() => {
              console.log("Close button clicked");  // debug log
              onClose();
            }}
            className="absolute top-3 right-4 text-gray-400 hover:text-[#f97316] transition text-3xl leading-none"
          >
            &times;
          </button>

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-sm text-gray-300">Username</label>
              <input
                type="text"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-600 bg-[hsl(0,0%,20%)] text-white focus:outline-none focus:ring-2 focus:ring-[#f97316]"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-600 bg-[hsl(0,0%,20%)] text-white focus:outline-none focus:ring-2 focus:ring-[#f97316]"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-600 bg-[hsl(0,0%,20%)] text-white focus:outline-none focus:ring-2 focus:ring-[#f97316]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f97316] text-white font-semibold py-3 rounded-lg hover:bg-[#fb923c] transition"
            >
              Sign Up
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
