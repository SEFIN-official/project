import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);
    try {
      const res = await API.post("/auth/signup", formData);
      setSuccess("Sign up successful! Welcome aboard 🎉");
      setTimeout(() => {
        navigate("/login");
      }, 1300);
    } catch (err) {
      setError(err.response?.data?.msg || "Sign up failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(133deg, #f7d4ff 0%, #dbeafe 90%);
        }
        .signup-container {
          background: #fff;
          max-width: 420px;
          width: 100%;
          border-radius: 14px;
          padding: 45px 34px 38px;
          box-shadow: 0 16px 40px 0 #d0bafd4f;
          margin: 64px auto 0;
          animation: fadeInUp 0.7s cubic-bezier(.61,1.23,.33,1) 0s 1 both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px) scale(.96);}
          100% { opacity: 1; transform: translateY(0) scale(1);}
        }
        h2 {
          margin-bottom: 22px;
          font-weight: 800;
          color: #be3cd3;
          letter-spacing: 1.1px;
          text-align: center;
          background: linear-gradient(90deg, #9941e9 30%, #38bdf8 70%);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 26px;
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
          border-color: #a463f2;
        }
        .input-group label {
          font-size: 13px;
          color: #7c399b;
          letter-spacing: 0.7px;
          margin-left: 8px;
          margin-bottom: 6px;
          transition: color 0.3s;
          pointer-events: none;
          user-select: none;
        }
        .input-group input:focus + label,
        .input-group input:not(:placeholder-shown) + label {
          color: #9c36b5;
          font-weight: 600;
          font-size: 11px;
          margin-bottom: 2px;
          transform: translateY(-6px);
        }
        button {
          padding: 14px;
          font-weight: 700;
          background: linear-gradient(90deg,#b983ff,#6893f5);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          box-shadow: 0 5px 15px rgba(108,99,255,0.18);
          cursor: pointer;
          margin-bottom: 6px;
          transition: background 0.29s, box-shadow 0.24s, color 0.14s;
        }
        button:hover, button:focus {
          background: linear-gradient(90deg, #8856e6 20%, #51bbf5 90%);
          color: #fffbe8;
          box-shadow: 0 9px 34px #9961d544;
        }
        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .error-message {
          color: #d61a4a;
          font-weight: 600;
          font-size: 14px;
          margin-top: 6px;
          text-align: center;
          animation: shakeX .34s ease;
        }
        .success-message {
          color: #109156;
          font-size: 15px;
          text-align: center;
          font-weight: 700;
        }
        @keyframes shakeX {
          0%, 100% { transform: translateX(0); }
          30%, 70% { transform: translateX(-8px); }
          50% { transform: translateX(6px); }
        }
        .login-text {
          margin-top: 22px;
          text-align: center;
          font-size: 14px;
          color: #472b78;
        }
        .login-text a {
          color: #9b47f6;
          font-weight: 600;
          text-decoration: none;
        }
        .login-text a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="signup-container" role="main" aria-label="Signup form">
        <h2>Join the Career MVP</h2>
        <form className="signup-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
          <div className="input-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              autoFocus
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              autoComplete="new-password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing up…" : "Sign Up"}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <p className="login-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </>
  );
}

export default Signup;
