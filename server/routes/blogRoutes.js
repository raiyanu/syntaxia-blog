import { protect } from "../middleware/authMiddleware.js";
import express from "express";
import { postBlog } from "../controllers/blogController.js";
const router = express.Router();

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
