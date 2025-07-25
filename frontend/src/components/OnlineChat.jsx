import React from "react";
import { FiSend, FiPaperclip, FiX } from "react-icons/fi";

const messages = [
  {
    id: 1,
    text: "Sed ut perspiciatis unde omnis iste natus error sit?",
    fromUser: false,
  },
  {
    id: 2,
    text: "Nemo enim ipsam voluptatem quia voluptas",
    fromUser: true,
  },
  {
    id: 3,
    text: "Sed ut perspiciatis unde omnis iste natus error sit?",
    fromUser: false,
  },
];

export default function OnlineChat() {
  return (
    <div className="w-full max-w-sm bg-black rounded-3xl p-4 flex flex-col gap-4 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between text-white border-b border-purple-700 pb-2">
        <h2 className="text-lg font-semibold tracking-wide">ONLINE CHART</h2>
        <button
          aria-label="Close chat"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FiX size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-4">
        {messages.map(({ id, text, fromUser }) => (
          <div
            key={id}
            className={`flex items-center gap-3 ${
              fromUser ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              {/* Placeholder avatar circle */}
              <svg
                className="w-8 h-8 text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 8-4 8-4s8 0 8 4v1H4v-1z" />
              </svg>
            </div>

            {/* Message bubble */}
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-3 text-white text-sm font-medium shadow-md ${
                fromUser ? "bg-purple-700 rounded-br-none" : "bg-purple-800 rounded-bl-none"
              }`}
            >
              {text}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center justify-between pt-3 border-t border-purple-700">
        <button
          aria-label="Attach file"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          <FiPaperclip size={24} />
        </button>
        <button
          aria-label="Send message"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          <FiSend size={24} />
        </button>
      </div>
    </div>
  );
}
