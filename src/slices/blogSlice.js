import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postBlog = createAsyncThunk(
	"blog/post",
	async (data, { rejectWithValue }) => {
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

const initialState = {
	loading: false,
	error: null,
	blogs: [],
};

const blogSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(postBlog.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(postBlog.fulfilled, (state, action) => {
				state.loading = false;
			})
			.addCase(postBlog.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				alert(action.payload.message);
			})
			.addCase(getBlog.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getBlog.fulfilled, (state, action) => {
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
			})
			.addCase(getBlog.rejected, (state, action) => {
				state.loading = false;
				state.error = {
					message: "Unable to fetch blogs",
					apiResponse: action.payload.message,
				};
				alert(action.payload.message);
			});
	},
});

export default blogSlice;
