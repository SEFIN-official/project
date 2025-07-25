import React, { useState, useEffect, useRef } from "react";
import axios from "../api/axios"; // Adjust path as needed
import { FiSend } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import { IoSparklesOutline, IoChevronDown } from "react-icons/io5";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const suggestions = [
    "Machine learning",
    "Frontend roadmap",
    "Trunukand Roadmap",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const userMsg = { from: "user", text: message };
    setChatHistory((prev) => [...prev, userMsg]);
    setIsLoading(true);
    try {
      const res = await axios.post("/chatbot", { message });
      const botMsg = { from: "bot", text: res.data.reply };
      setChatHistory((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chatbot error:", err.message);
      setChatHistory((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
    setMessage("");
  };

  const handleSuggestionClick = (text) => {
    setMessage(text);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isLoading]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background:
          "linear-gradient(to bottom right, #d0b3f2, #fbc4ab, #a0d8ef)",
        fontFamily: "sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "256px",
          height: "256px",
          backgroundColor: "#b19cd9",
          borderRadius: "50%",
          mixBlendMode: "multiply",
          filter: "blur(50px)",
          opacity: 0.7,
          animation: "blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "25%",
          width: "256px",
          height: "256px",
          backgroundColor: "#fbc4ab",
          borderRadius: "50%",
          mixBlendMode: "multiply",
          filter: "blur(50px)",
          opacity: 0.7,
          animation: "blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1)",
          animationDelay: "2s",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          width: "256px",
          height: "256px",
          backgroundColor: "#a0d8ef",
          borderRadius: "50%",
          mixBlendMode: "multiply",
          filter: "blur(50px)",
          opacity: 0.7,
          animation: "blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1)",
          animationDelay: "4s",
        }}
      />

      {/* Main Chatbox container */}
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transform: "scale(0.95)",
          transition: "all 0.5s ease",
          border: "1px solid #ddd",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            backgroundColor: "rgba(128, 0, 128, 0.5)", // purple with opacity
            color: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            borderBottom: "1px solid #6b46c1",
            position: "relative",
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
           CAREER AI BOT
          </h1>
         
        </div>

        {/* Content section */}
        <div style={{ padding: "24px 16px 8px", position: "relative" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "16px",
            }}
          >
            Ask your question
          </h2>
          {/* Input field with label and badge */}
          <div style={{ position: "relative", marginBottom: "16px" }}>
            <input
              type="text"
              placeholder="Type your question here..."
              style={{
                width: "100%",
                padding: "16px",
                paddingRight: "50px",
                paddingLeft: "16px",
                borderRadius: "16px",
                border: "1px solid #d1d5db",
                outline: "none",
                fontSize: "1rem",
                fontWeight: "500",
                backgroundColor: "#f3f4f6",
                transition: "border-color 0.2s",
              }}
            />
            {/* Checkbox label */}
            <label
              style={{
                position: "absolute",
                bottom: "8px",
                left: "16px",
                display: "flex",
                alignItems: "center",
                fontSize: "0.75rem",
                color: "#6b7280",
              }}
            >
             
            </label>
            {/* Badge */}
            <span
              style={{
                position: "absolute",
                bottom: "8px",
                right: "16px",
                fontSize: "0.75rem",
                color: "#6b7280",
              }}
            >
              110
            </span>
          </div>

          {/* Suggestions / Chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {suggestions.map((text, i) => (
              <button
                key={i}
                onClick={() => handleSuggestionClick(text)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "white",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  background: i === 0
                    ? "linear-gradient(to right, #8b5cf6, #6366f1)"
                    : i === 1
                    ? "linear-gradient(to right, #ef4444, #f97316)"
                    : i === 2
                    ? "linear-gradient(to right, #14b8a6, #06b6d4)"
                    : "gray",
                }}
              >
                {i === 0 && (
                  <IoSparklesOutline style={{ fontSize: "1.2rem" }} />
                )}
                {i === 1 && (
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>!</span>
                )}
                {i === 2 && <FaRobot style={{ fontSize: "1.2rem" }} />}
                {text}
                {i === 0 && <IoChevronDown style={{ marginLeft: "4px" }} />}
                {i === 1 && (
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "8px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                  >
                    ▶
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Chat messages */}
          <div
            style={{
              marginTop: "16px",
              flex: 1,
              overflowY: "auto",
              paddingRight: "8px",
              maxHeight: "300px",
            }}
          >
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "24px",
                    maxWidth: "75%",
                    backgroundColor:
                      msg.from === "user" ? "#8b5cf6" : "#e5e7eb",
                    color: msg.from === "user" ? "white" : "#1f2937",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    transition: "all 0.2s",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Typing indicator */}
            {isLoading && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 16px",
                  backgroundColor: "#e5e7eb",
                  borderRadius: "24px",
                  maxWidth: "75%",
                  alignSelf: "flex-start",
                  marginBottom: "8px",
                  animation: "pulse 1.5s infinite",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#8b5cf6",
                    animation: "blink 1.5s infinite",
                  }}
                />
                <span style={{ fontSize: "0.9rem", color: "#374151" }}>Typing...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input area */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            padding: "16px",
            backgroundColor: "white",
            borderTop: "1px solid #ddd",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
            alignItems: "center",
          }}
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question..."
            style={{
              flex: 1,
              padding: "12px 16px",
              borderRadius: "16px",
              border: "1px solid #d1d5db",
              outline: "none",
              fontSize: "1rem",
              fontWeight: "500",
              backgroundColor: "#f9fafb",
              transition: "border-color 0.2s",
            }}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !message.trim()}
            style={{
              marginLeft: "12px",
              padding: "12px 24px",
              borderRadius: "12px",
              background: "linear-gradient(to right, #8b5cf6, #6366f1)",
              color: "white",
              fontWeight: "600",
              fontSize: "1rem",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "all 0.3s",
              opacity: isLoading || !message.trim() ? 0.6 : 1,
            }}
          >
            Next
          </button>
        </form>
      </div>

      {/* Animations for blob and pulse (add in style tag or global CSS if needed) */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
        `}
      </style>
    </div>
  );
}