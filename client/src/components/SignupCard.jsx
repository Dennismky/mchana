import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function SignupCard({ onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center backdrop bg-black/70 backdrop-blur-sm backdrop"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 40 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-[90%] max-w-md p-8 rounded-2xl shadow-2xl border border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-[#f97316] transition"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Create Account
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-2 text-gray-400">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 rounded-lg border border-gray-600 bg-[#242424] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg border border-gray-600 bg-[#242424] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-3 rounded-lg border border-gray-600 bg-[#242424] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#f97316] to-[#fb923c] hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-400">
            Already have an account?{' '}
            <span className="text-[#f97316] cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
