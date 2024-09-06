import { protect } from "../middleware/authMiddleware.js";
import express from "express";
import { postBlog, getBlogs } from "../controllers/blogController.js";
const router = express.Router();

router.route("/:blogId").get(getBlogs);
router
	.route("/")
	.post(protect, postBlog)
	.get(protect, (req, res) => {
		res.send("Blog route for giving blog lists");
	})
	.put(protect, (req, res) => {
		res.send("Blog route for updating");
	});

export default router;
