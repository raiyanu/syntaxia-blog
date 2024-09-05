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

const initialState = {
	loading: false,
	error: null,
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
			});
	},
});

export default blogSlice;
