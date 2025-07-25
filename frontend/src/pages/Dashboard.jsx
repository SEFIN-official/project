import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// Replace with real user context or API
const user = { name: "Sefin" };

const dashboardCards = [
  {
    title: "Ask Chatbot",
    description: "Get career advice, quick Q&A, or AI-powered guidance.",
    link: "/chat",
    color: "linear-gradient(135deg,#6ee7b7,#3b82f6)",
    icon: "💬",
  },
  {
    title: "Browse Resources",
    description: "Find top courses, study links, and guides for every domain.",
    link: "/resources",
    color: "linear-gradient(135deg,#fbc2eb,#a18cd1)",
    icon: "📚",
  },
  {
    title: "Read Blogs",
    description: "Stay updated with trending articles and news in tech.",
    link: "/blog",
    color: "linear-gradient(135deg,#fcb69f,#ffecd2)",
    icon: "📰",
  },
];

export default function Dashboard() {
  const location = useLocation();

  // Show pop-up only once on (successful) login - or when redirected with a state flag
  useEffect(() => {
    if (location.state?.justLoggedIn) {
      toast.success("🎉 You are logged in!", {
        position: "top-center",
        autoClose: 1800,
        hideProgressBar: false,
        style: { fontWeight: 600, fontSize: 17 },
      });
      // Clear the flag if you wish
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg,#ece9ff,#f4f8fb 90%)",
        padding: "52px 10px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 950, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: 38,
            marginBottom: 14,
            fontWeight: 800,
            letterSpacing: 1,
            color: "#2c2660",
            textShadow: "0 2px 8px #d6d8fc",
          }}
        >
          Welcome, <span style={{ color: "#0da7a5" }}>{user.name}!</span>
        </h1>
        <p
          style={{
            fontSize: 20,
            color: "#6366f1",
            marginBottom: 56,
            background: "#f7f7ff99",
            borderRadius: 8,
            padding: "8px 18px",
            display: "inline-block",
            boxShadow: "0 2px 12px #d3dae64d",
          }}
        >
          🚀 Kick-start your career! Choose a tool below to begin:
        </p>
        {/* Animated Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px,1fr))",
            gap: 38,
            marginTop: 30,
          }}
        >
          {dashboardCards.map((card, idx) => (
            <Link
              to={card.link}
              key={card.title}
              className="dashboard-card"
              style={{
                background: card.color,
                borderRadius: 18,
                color: "#181825",
                textDecoration: "none",
                padding: "32px 24px",
                boxShadow: "0 6px 28px #c3c6fa53",
                position: "relative",
                minHeight: 200,
                overflow: "hidden",
                cursor: "pointer",
                transition: "box-shadow 0.2s, transform 0.2s",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                ...(idx % 2
                  ? { animation: "popB 0.6s cubic-bezier(.61,1.23,.33,1) forwards" }
                  : { animation: "popA 0.65s cubic-bezier(.55,1.38,.18,1) forwards" }),
              }}
            >
              <span
                style={{
                  fontSize: 45,
                  position: "absolute",
                  top: 24,
                  right: 32,
                  opacity: 0.14,
                  userSelect: "none",
                  pointerEvents: "none",
                  filter: "blur(1px)",
                }}
              >
                {card.icon}
              </span>
              <h2
                style={{
                  margin: "0 0 9px",
                  fontWeight: 700,
                  letterSpacing: 0.3,
                  color: "#24346e",
                  fontSize: 24,
                }}
              >
                {card.title}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, margin: 0 }}>
                {card.description}
              </p>
              <button
                style={{
                  marginTop: 20,
                  padding: "10px 24px",
                  background: "radial-gradient(circle at 40% 40%, #fff 54%, #f9fafc 100%)",
                  color: "#1b253c",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 15,
                  boxShadow: "0 2px 6px #3255af22",
                  cursor: "pointer",
                  transition: "background 0.12s, color 0.12s",
                  marginBottom: 4,
                }}
              >
                Go &rarr;
              </button>
            </Link>
          ))}
        </div>
      </div>
      {/* Keyframes for pop-in effect */}
      <style>{`
        @keyframes popA {
          0% { transform: scale(.92) translateY(32px); opacity:0; }
          80% {transform: scale(1.04);}
          100% {transform: scale(1) translateY(0); opacity:1;}
        }
        @keyframes popB {
          0% { transform: scale(.97) translateY(-24px); opacity:0; }
          80% {transform: scale(1.035);}
          100% {transform: scale(1) translateY(0); opacity:1;}
        }
        .dashboard-card:hover {
          transform: translateY(-10px) scale(1.025);
          box-shadow: 0 12px 36px #8888ff33;
        }
      `}</style>
    </div>
  );
}
