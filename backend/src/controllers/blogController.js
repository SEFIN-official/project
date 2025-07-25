import Blog from "../models/Blog.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = new Blog({ title, content });
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
