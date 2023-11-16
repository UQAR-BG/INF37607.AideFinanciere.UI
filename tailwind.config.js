/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/*.{js,vue,ts}",
		"./src/layouts/**/*.vue",
		"./src/pages/**/*.vue",
		"./src/plugins/**/*.{js,ts}",
		"./src/app.vue",
		"./src/error.vue"
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px"
		},
		colors: {
			blue: "#1fb6ff",
			purple: "#7e5bef",
			pink: "#ff49db",
			orange: "#ff7849",
			green: "#13ce66",
			yellow: "#ffc82c",
			"gray-dark": "#273444",
			gray: "#8492a6",
			"gray-light": "#d3dce6",
			brand: "#095797",
			main: "#EEEFF3",
			navbar: "#00374C",
			navlink: {
				hover: "#045280",
				active: "#2076C1"
			},
			font: {
				DEFAULT: "#292C33",
				pale: "#FFFFFF",
				dark: "#000000",
				link: "#00547F",
				error: "#FF0000"
			},
			input: {
				disabled: "#E3E7EC",
				border: "#808A9D"
			},
			submit: {
				DEFAULT: "#095797",
				border: "#808A9D",
				hover: "#146BB2"
			},
			cancel: {
				DEFAULT: "#CBD1D6",
				border: "#898991",
				hover: "#909396"
			},
			after: {
				border: "#F09686"
			},
			socials: "#015480",
			heading: "#223654"
		},
		fontFamily: {
			sans: ["Roboto", "Helvetica Neue", "sans-serif"],
			"second-heading": ["Open Sans", "sans-serif"]
		},
		borderRadius: {
			none: "0",
			sm: ".125rem",
			DEFAULT: ".25rem",
			lg: ".5rem",
			full: "9999px"
		},
		extend: {
			fontWeight: {
				inherit: "inherit !important"
			},
			lineHeight: {
				inherit: "inherit !important"
			},
			maxWidth: {
				logo: "144px"
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: 0,
						transform: "translateY(15px)"
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)"
					}
				},
				"after-bounce": {
					"25%": {
						transform: "translateY(5px)"
					},
					"75%": {
						transform: "translateY(-5px)"
					}
				}
			},
			animation: {
				"fade-in": "fade-in 0.4s",
				"fade-in-1": "fade-in 0.4s 0.1s backwards",
				"fade-in-2": "fade-in 0.4s 0.2s backwards",
				"after-bounce": "after-bounce 0.5s infinite"
			}
		}
	},
	plugins: [require("tailwindcss"), require("postcss"), require("autoprefixer")]
};
