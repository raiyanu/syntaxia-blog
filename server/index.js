import express from "express";
import jwt from "jsonwebtoken";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import connectDB from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 5000;
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
app.use((req, res, next) => {
	console.log(`\n\n\n${req.method.toUpperCase()} : ${req.originalUrl}`);
	next();
});

app.use(
	express.static("../dist"),
	express.json({ limit: "50mb", extended: true, type: "application/json" }),
	express.urlencoded({ extended: true }),
	cookieParser()
);

connectDB();

app.get("/api", (req, res) => {
	res.json({
		message: "Welcome to the API",
	});
});

app.get("/api/test", (req, res) => {
	res.status(200).json({
		message: "API STATUS: OK",
	});
});

app.use("/api/users", userRoutes);
app.use("/api/blog", blogRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
