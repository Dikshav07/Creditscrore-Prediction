import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loginUser } from "../api/auth"; // Import API function
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      
      // Save token in local storage
      localStorage.setItem("token", response.token);
      toast.success("Login successful!");

      // Redirect after a short delay
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      toast.error(error.message || "Login failed! Please try again.");
    }
  };

  return (
    <div className="login_page">
      <ToastContainer />
      <div className="form-container">
        <h2 className="title">Sign In</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>
          <button className="sign" type="submit">
            Sign In
          </button>
        </form>

        <div className="social-message">
          <span className="line"></span>
          <span className="message">Login with social accounts</span>
          <span className="line"></span>
        </div>

        <div className="social-icons">
          <button className="icon"><FaGoogle size={24} /></button>
          <button className="icon"><FaTwitter size={24} /></button>
          <button className="icon"><FaGithub size={24} /></button>
        </div>

        <div className="signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
