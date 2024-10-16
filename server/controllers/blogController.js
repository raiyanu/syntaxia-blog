import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Blog from "../models/blogModel.js";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage });

// @desc Blog Post
// route POST /api/blog/
// @access Protected
const postBlog = asyncHandler((req, res, next) => {
	upload.single("image")(req, res, async (err) => {
		console.log("Adding blog..."); // TODO : REMOVE THIS
		try {
			console.log("req.file:", req.file); // TODO : REMOVE THIS
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
				tags: blogData.tags,
				category: blogData.category,
			});
			const createdBlog = await blog.save();
			res.status(201).json({
				_id: createdBlog._id,
				title: createdBlog.title,
				content: createdBlog.content,
				tags: createdBlog.tags,
				category: createdBlog.category,
			});
		} catch (error) {
			res.status(401);
			console.log("Error:", error.message);
			throw new Error("Something went wrong...");
		}
	}
	)
}

);

const getBlog = asyncHandler(async (req, res) => {
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
const getBlogs = asyncHandler(async (req, res) => {
	const limit = 6;
	try {
		const blogs = await Blog.find()
			.skip(limit * (req.params.pageNo - 1))
			.limit(limit);
		if (!blogs) {
			res.status(404).send({
				message: `couldn't get the content for page ${req.params.pageNo}th`,
			});
		} else {
			const doclength = await Blog.countDocuments();
			res.json({
				blogs,
				pages:
					(doclength - (doclength % limit)) / limit +
					(doclength % limit === 0 ? 0 : 1),
				doclength,
			});
		}
	} catch (error) {
		res.status(401);
		console.log("Error:", error.message);
		throw new Error("Unable to fetch blogs");
	}
});


export { postBlog, getBlogs, getBlog, upload };
