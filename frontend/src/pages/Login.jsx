import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await API.post("/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard", { state: { justLoggedIn: true } });  // Pass flag for toast
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          color: #333;
        }
        .login-container {
          background: #fff;
          max-width: 380px;
          width: 100%;
          border-radius: 12px;
          padding: 40px 32px 48px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
          animation: fadeIn 0.5s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        h2 {
          margin-bottom: 28px;
          font-weight: 700;
          color: #3c3c3c;
          text-align: center;
          letter-spacing: 1.2px;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .input-group {
          position: relative;
          display: flex;
          flex-direction: column-reverse;
          width: 100%;
        }
        .input-group input {
          padding: 14px 14px 10px;
          font-size: 16px;
          border: 2px solid #ccc;
          border-radius: 8px;
          outline-offset: 3px;
          transition: border-color 0.3s;
          background: transparent;
          color: #222;
        }
        .input-group input:focus {
          border-color: #6c63ff;
        }
        .input-group label {
          font-size: 13px;
          color: #777;
          letter-spacing: 0.7px;
          margin-left: 8px;
          margin-bottom: 6px;
          transition: color 0.3s;
          pointer-events: none;
          user-select: none;
        }
        .input-group input:focus + label,
        .input-group input:not(:placeholder-shown) + label {
          color: #6c63ff;
          font-weight: 600;
          font-size: 11px;
          margin-bottom: 2px;
          transform: translateY(-5px);
        }
        button {
          padding: 14px;
          font-weight: 700;
          background: #6c63ff;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 18px;
          box-shadow: 0 5px 15px rgba(108,99,255,0.5);
          transition: background 0.35s ease, box-shadow 0.35s ease;
          user-select: none;
        }
        button:hover:enabled {
          background: #5848d6;
          box-shadow: 0 6px 20px rgba(88,72,214,0.7);
        }
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .error-message {
          color: #e74c3c;
          font-weight: 600;
          font-size: 14px;
          margin-top: 10px;
          text-align: center;
          animation: shake 0.3s ease;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .signup-text {
          margin-top: 24px;
          text-align: center;
          font-size: 14px;
          color: #555;
        }
        .signup-text a {
          color: #6c63ff;
          font-weight: 600;
          text-decoration: none;
        }
        .signup-text a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="login-container" role="main" aria-label="Login form">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              autoComplete="email"
              aria-describedby="emailHelp"
              autoFocus
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              value={formData.password}
              onChange={handleChange}
              required
              aria-required="true"
              autoComplete="current-password"
              aria-describedby="passwordHelp"
            />
            <label htmlFor="password">Password</label>
          </div>

          <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
            {isSubmitting ? "Logging in…" : "Login"}
          </button>

          {error && <p className="error-message" role="alert">{error}</p>}
        </form>

        <p className="signup-text" tabIndex={0}>
          Don't have an account? <Link to="/">Sign up here</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
