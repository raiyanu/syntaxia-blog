import express from "express";
import {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
} from "../controllers/userController.js";
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", protect, logoutUser);
router
	.route("/profile")
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

export default router;
