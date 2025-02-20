import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				linkedin: {
					primary: "#f9930e", // WorkHive orange
					secondary: "#FFFFFF", // White
					accent: "#ffc478", // WorkHive light orange (for accents)
					neutral: "#000000", // Black (for text)
					"base-100": "#F3F2EF", // Light Gray (background)
					info: "#5E5E5E", // Dark Gray (for secondary text)
					success: "#057642", // Dark Green (for success messages)
					warning: "#F5C75D", // Yellow (for warnings)
					error: "#CC1016", // Red (for errors)
				},
			},
		],
	},
};