import express from "express";
import { askQuestion } from "../controllers/chatbotController.js";

const router = express.Router();
router.post("/", askQuestion);
export default router;
