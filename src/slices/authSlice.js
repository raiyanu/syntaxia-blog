import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("api/auth", async (data) => {
	const response = await axios.post("/api/auth", {
		...data,
	});
	const responseData = await response.json();
	if (!response.ok) {
		throw new Error(responseData.message || "Could not authenticate you.");
	}
	return responseData;
});
export const register = createAsyncThunk("api/users", async (data) => {
	const response = await axios.post("/api/users", {
		...data,
	});
	const responseData = await response.json();
	console.log("responseDatar", responseData);
	if (!response.ok) {
		throw new Error(responseData.message || "Could not authenticate you.");
	}
	return responseData;
});

const initialState = {
	userInfo: localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: null,
	loading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		// login(state, action) {
		// 	state.userInfo = action.payload;
		// 	localStorage.setItem("userInfo", JSON.stringify(action.payload));
		// },
		// logout(state) {
		// 	state.userInfo = null;
		// 	localStorage.removeItem("userInfo");
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.userInfo = action.payload;
				state.loading = false;
				localStorage.setItem("userInfo", JSON.stringify(action.payload));
				console.log("State:", state);
			})
			.addCase(login.rejected, (state, action) => {
				state.userInfo = null;
				localStorage.removeItem("userInfo");
				console.log("State:", state);
			})
			.addCase(login.pending, (state, action) => {
				state.userInfo = null;
				localStorage.removeItem("userInfo");
				console.log("State:", state);
			})
			.addCase(register.fulfilled, (state, action) => {
				state.userInfo = action.payload;
				state.loading = false;
				localStorage.setItem("userInfo", JSON.stringify(action.payload));
				console.log("State:", state);
			})
			.addCase(register.rejected, (state, action) => {
				state.userInfo = null;
				localStorage.removeItem("userInfo");
				console.log("State:", state);
			})
			.addCase(register.pending, (state, action) => {
				state.userInfo = null;
				localStorage.removeItem("userInfo");
				console.log("State:", state);
			});
	},
});

export default authSlice;
