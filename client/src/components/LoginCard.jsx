import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function LoginCard({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 40 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative w-96 p-8 rounded-2xl shadow-elegant bg-[hsl(0,0%,95%)] dark:bg-[hsl(0,0%,10%)] border border-border dark:border-muted-foreground"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-foreground dark:text-primary-foreground hover:text-primary dark:hover:text-accent transition"
      >
        <X className="w-6 h-6" />
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center text-foreground dark:text-primary-foreground">
        Welcome Back
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-foreground dark:text-muted-foreground mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md border border-border dark:border-muted-foreground bg-white dark:bg-[hsl(0,0%,15%)] text-foreground dark:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm text-foreground dark:text-muted-foreground mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-md border border-border dark:border-muted-foreground bg-white dark:bg-[hsl(0,0%,15%)] text-foreground dark:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition"
        >
          Log In
        </button>
      </form>
      <p className="text-center mt-4 text-sm text-muted-foreground dark:text-muted">
        Don’t have an account? <span className="text-primary dark:text-accent cursor-pointer hover:underline">Sign up</span>
      </p>
    </motion.div>
  );
}
