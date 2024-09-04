import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  blog_id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "users", required:true },
});

blogSchema.pre("validate", async function (next) {
  if (!this.blog_id) {
    const latestBlog = await this.constructor.findOne(
      {},
      {},
      { sort: { blog_id: -1 }, limit: 1 }
    );
    this.blog_id = latestBlog ? latestBlog.blog_id + 1 : 1;
  }
  next();
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
