import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Blog from "../models/blogModel.js";

// @desc Blog Post
// route POST /api/blog/
// @access Protected
const postBlog = asyncHandler(async (req, res) => {
	console.log("Adding blog..."); // TODO : REMOVE THIS
	try {
		const blogData = req.body.blog;
		if (!blogData) {
			res.status(400);
			throw new Error("Invalid blog data");
		} else if (!blogData.title || !blogData.content) {
			res.status(400);
			throw new Error("Invalid blog data : Title and Content are required");
		}
		console.log("Blog Data:", blogData); // TODO : REMOVE THIS
		console.log("req.Users :", req.user); // TODO : REMOVE THIS
		const user = await User.findOne({
			email: req.user.email,
		});
		const blog = new Blog({
			title: blogData.title,
			content: blogData.content,
			author: req.user._id,
		});
		const createdBlog = await blog.save();
		res.status(201).json({
			_id: createdBlog._id,
			title: createdBlog.title,
			content: createdBlog.content,
		});
	} catch (error) {
		res.status(401);
		throw new Error("Something went wrong...");
	}
});

const getBlogs = asyncHandler(async (req, res) => {
	try {
		const blogs = await Blog.findOne({ blog_id: req.params.blogId });
		console.log("Blogs:", blogs); // TODO : REMOVE THIS
		if (!blogs) {
			res.status(404).send({
				message: `No blogs found under the id of ${req.params.blogId}`,
			});
		} else {
			res.json(blogs);
		}
	} catch (error) {
		res.status(401);
		throw new Error("Unable to fetch blogs");
	}
});

export { postBlog, getBlogs };
