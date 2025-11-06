import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AuthModal({ type, onClose, onSuccess }) {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const isLogin = type === "login";

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? "/login" : "/register";
      const payload = isLogin
        ? { username: formData.username, password: formData.password }
        : formData;

      const res = await axios.post(`http://127.0.0.1:5000${endpoint}`, payload);

      toast.success(res.data.message);
      if (isLogin && res.data.token) {
        localStorage.setItem("token", res.data.token);
        onSuccess();
      } else if (!isLogin) {
        toast.info("Now please log in with your new account.");
        onSuccess("login");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-background dark:bg-foreground p-6 rounded-2xl shadow-elegant w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login to Your Account" : "Create an Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent border-border dark:border-muted-foreground"
            required
          />
          {!isLogin && (
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-transparent border-border dark:border-muted-foreground"
              required
            />
          )}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent border-border dark:border-muted-foreground"
            required
          />

          <button
            type="submit"
            className="w-full py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button onClick={() => onSuccess("signup")} className="text-primary underline">
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => onSuccess("login")} className="text-primary underline">
                Login
              </button>
            </>
          )}
        </p>

        <button
          onClick={onClose}
          className="mt-4 w-full text-center py-2 border rounded border-border dark:border-muted-foreground hover:bg-muted dark:hover:bg-muted-foreground transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
