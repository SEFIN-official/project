import express from "express";
import { getBlogs, createBlog } from "../controllers/blogController.js";

const router = express.Router();
router.get("/", getBlogs);
router.post("/", createBlog); // Optionally protect this with auth middleware

export default router;
