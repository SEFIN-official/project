import axios from "axios";

// export const askQuestion = async (req, res) => {
//   const { userMessage } = req.body;
//   if (!userMessage) return res.status(400).json({ error: "Missing question" });

//   try {
//     const response = await axios.post(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
//       { contents: [{ parts: [{ text: userMessage }] }] },
//       { params: { key: process.env.GEMINI_API_KEY } }
//     );

//     const answer = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
//     res.json({ reply: answer || "No response received." });
//   } catch (error) {
//     console.error("Gemini API Error:", error.message || error);
//     res.status(500).json({ error: "Failed to get answer from Gemini API" });
//   }
// };
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const askQuestion = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required." });
    }

    // Use a valid model like gemini-1.5-pro (or check using listModels)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });
  } catch (error) {
    console.error("❌ Chatbot Error:", error.message);
    res.status(500).json({ reply: "Gemini API error. Try again later." });
  }
};
