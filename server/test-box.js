import connectDB from "./config/db.js";
import mongoose from 'mongoose'
import Blog from "./models/blogModal.js";
import User from "./models/userModel.js";
await connectDB();

const blog = new Blog({
  title: "bad title 1",
  content: "bad content 2",
  author:mongoose.Schema.Types.ObjectId("123")
});
await blog.save();
console.log(`blog id is ${blog.id}`);
console.log(`blog :`, blog);

const oneuser = await User.fineOne();
console.log("oneUSer: ", oneuser);
