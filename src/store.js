import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import blogSlice from "./slices/blogSlice";
const store = configureStore({
	reducer: {
		auth: authReducer.reducer,
		blog: blogSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
	devTools: true,
});

export default store;
