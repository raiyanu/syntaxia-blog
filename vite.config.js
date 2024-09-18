import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
	const API_URL = env.API_URL;
	console.log("API_URL : ", API_URL);
	const PORT = env.PORT ? env.PORT : 3000;
	return {
		plugins: [react()],
		server: {
			port: PORT,
			proxy: {
				"/api": {
					target: API_URL,
					changeOrigin: true,
					secure: false,
				},
			},
		},
	};
});
