import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
	"auth/login",
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.post("/api/users/auth", {
				...data,
			});

			return response.data;
		} catch (error) {
			console.error("Error during Logging in:", error);
			// Return custom error message from the server if any
			return rejectWithValue(error.response.data);
		}
	}
);

export const register = createAsyncThunk(
	"auth/register",
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.post("/api/users", {
				...data,
			});

			return response.data;
		} catch (error) {
			console.error("Error during registration:", error);
			// Return custom error message from the server if any
			return rejectWithValue(error.response.data);
		}
	}
);

export const logout = createAsyncThunk("auth/logout", async () => {
	try {
		await axios.post("/api/users/logout");
	} catch (error) {
		console.error("Error during logging out:", error);
	}
});

const initialState = {
	userInfo: localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: null,
	loading: false,
	loggedIn: false,
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

			.addCase(login.pending, (state, action) => {
				state.userInfo = null;
				localStorage.removeItem("userInfo");
				console.log("State:", state);
			})
			.addCase(login.fulfilled, (state, action) => {
				state.userInfo = action.payload;
				state.loading = false;
				state.loggedIn = true;
				localStorage.setItem(
					"userInfo",
					JSON.stringify({ ...action.payload, loggedIn: true })
				);
				console.log("State:", state);
			})
			.addCase(login.rejected, (state, action) => {
				state.userInfo = null;
				localStorage.removeItem("userInfo");
				console.log("State:", state);
			})
			.addCase(register.pending, (state, action) => {
				state.userInfo = null;
				localStorage.removeItem("userInfo");
				console.log("State:", state);
			})
			.addCase(register.fulfilled, (state, action) => {
				state.userInfo = action.payload;
				state.loading = false;
				state.loggedIn = true;
				localStorage.setItem(
					"userInfo",
					JSON.stringify({ ...action.payload, loggedIn: true })
				);
				console.log("State:", state);
			})
			.addCase(register.rejected, (state, action) => {
				state.userInfo = null;
				localStorage.removeItem("userInfo");
				console.log("State:", state);
				console.log("action:", action);
			})
			.addCase(logout.pending, (state, action) => {
				state.userInfo = null;
				localStorage.removeItem("userInfo");
				state.loggedIn = false;
				console.log("State:", state);
			})
			.addCase(logout.rejected, (state, action) => {
				state.userInfo = null;
				localStorage.removeItem("userInfo");
				state.loggedIn = false;
				console.log("State:", state);
			});
	},
});

export default authSlice;
