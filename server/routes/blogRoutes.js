import { protect } from "../middleware/authMiddleware.js";
import express from "express";
import { postBlog, getBlogs, getBlog } from "../controllers/blogController.js";
const router = express.Router();

router.route("/:blogId").get(getBlog);
router
	.route("/")
	.post(protect, postBlog)

	.put(protect, (req, res) => {
		res.send("Blog route for updating");
	});
router.route("/page/:pageNo").get(getBlogs);
export default router;
