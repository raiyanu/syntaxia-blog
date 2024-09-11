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
	loggedIn: localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo")).loggedIn
		: false,
	shouldNavigate: false,
};

const loginManagement = {
	pending: (state, action) => {
		state.userInfo = null;
		localStorage.removeItem("userInfo");
		console.log("State:", state);
	},
	fulfilled: (state, action) => {
		state.userInfo = action.payload;
		state.loading = false;
		state.loggedIn = true;
		localStorage.setItem(
			"userInfo",
			JSON.stringify({ ...action.payload, loggedIn: true })
		);
		console.log("State:", state);
		state.shouldNavigate = true;
	},
	rejected: (state, action) => {
		state.userInfo = null;
		localStorage.removeItem("userInfo");
		console.log("State:", state);
		alert(action.payload.message);
	},
};

const registerManagement = {
	pending: (state, action) => {
		state.userInfo = null;
		localStorage.removeItem("userInfo");
		console.log("State:", state);
	},
	fulfilled: (state, action) => {
		state.userInfo = action.payload;
		state.loading = false;
		state.loggedIn = true;
		localStorage.setItem(
			"userInfo",
			JSON.stringify({ ...action.payload, loggedIn: true })
		);
		console.log("State:", state);
		state.shouldNavigate = true;
	},
	rejected: (state, action) => {
		state.userInfo = null;
		localStorage.removeItem("userInfo");
		console.log("State:", state);
		console.log("action:", action);
		alert(action.payload.message);
	},
};

const logoutManagement = {
	pending: (state, action) => {
		state.userInfo = null;
		localStorage.removeItem("userInfo");
		state.loggedIn = false;
		console.log("State:", state);
	},
	rejected: (state, action) => {
		state.userInfo = null;
		localStorage.removeItem("userInfo");
		state.loggedIn = false;
		console.log("State:", state);
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		resetNavigationFlag: (state) => {
			state.shouldNavigate = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, loginManagement.pending)
			.addCase(login.fulfilled, loginManagement.fulfilled)
			.addCase(login.rejected, loginManagement.rejected)
			.addCase(register.pending, registerManagement.pending)
			.addCase(register.fulfilled, registerManagement.fulfilled)
			.addCase(register.rejected, registerManagement.rejected)
			.addCase(logout.pending, logoutManagement.pending)
			.addCase(logout.rejected, logoutManagement.rejected);
	},
});

export const { resetNavigationFlag } = authSlice.actions;
export default authSlice;
