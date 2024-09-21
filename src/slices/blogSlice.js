import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postBlog = createAsyncThunk(
	"blog/post",
	async (data, { rejectWithValue }) => {
		console.log("DATA:", data);
		try {
			const response = await axios.post("/api/blog/", {
				blog: { ...data },
			});
			return response.data;
		} catch (error) {
			console.error("Error during Posting blog in:", error);
			// Return custom error message from the server if any
			return rejectWithValue(error.response.data);
		}
	}
);
export const getBlog = createAsyncThunk(
	"blog/get",
	async (blogId, { rejectWithValue }) => {
		try {
			const response = await axios.get(`/api/blog/${blogId}`);
			return response.data;
		} catch (error) {
			console.error("Error during fetching blog in:", error);
			// Return custom error message from the server if any
			return rejectWithValue(error.response.data);
		}
	}
);

export const getBlogS = createAsyncThunk(
	"blogs/get",
	async (pageNo, { rejectWithValue }) => {
		try {
			const response = await axios.get(`/api/blog/page/${pageNo}`);
			console.log("Response:", response);
			return response.data;
		} catch (error) {
			console.error("Error during fetching blog in:", error);
			// Return custom error message from the server if any
			return rejectWithValue(error.response.data);
		}
	}
);

const getBlogSManagement = {
	pending: (state, action) => {
		state.blogs = [];
		state.loading = true;
	},
	fulfilled: (state, action) => {
		state.blogs = action.payload.blogs;
		state.totalPages = action.payload.pages;
		state.totalBlogs = action.payload.doclength;
		state.loading = false;
	},
	rejected: (state, action) => {
		state.blogs = [];
		state.loading = false;
	},
};

const postBlogHandler = {
	pending: (state, action) => {
		state.loading = true;
	},
	fulfilled: (state, action) => {
		state.loading = false;
	},
	rejected: (state, action) => {
		state.loading = false;
		state.error = action.payload;
		alert(action.payload.message);
	},
};

const getBlogHandler = {
	pending: (state, action) => {
		state.loading = true;
	},
	fulfilled: (state, action) => {
		state.loading = false;
		console.log("Blogs fetched:", action.payload);
		console.log("Blogs fetched ID:", action.payload.blog_id);
		console.log(" state:", state.blogs);
		if (state.blogs.length > 0) {
			state.blogs = state.blogs.filter(
				(blog) => blog.blog_id !== action.payload.blog_id
			);
		}
		state.blogs = [...state.blogs, { ...action.payload }];
	},
	rejected: (state, action) => {
		state.loading = false;
		state.error = {
			message: "Unable to fetch blogs",
			apiResponse: action.payload.message,
		};
		alert(action.payload.message);
	},
};

const initialState = {
	loading: false,
	error: null,
	blogs: [],
	totalPages: 0,
	totalBlogs: 0,
};

const blogSlice = createSlice({
	name: "blog",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(postBlog.pending, postBlogHandler.pending)
			.addCase(postBlog.fulfilled, postBlogHandler.fulfilled)
			.addCase(postBlog.rejected, postBlogHandler.rejected);
		builder
			.addCase(getBlog.pending, getBlogHandler.pending)
			.addCase(getBlog.fulfilled, getBlogHandler.fulfilled)
			.addCase(getBlog.rejected, getBlogHandler.rejected);
		builder
			.addCase(getBlogS.pending, getBlogSManagement.pending)
			.addCase(getBlogS.fulfilled, getBlogSManagement.fulfilled)
			.addCase(getBlogS.rejected, getBlogSManagement.rejected);
	},
});

export default blogSlice;
