// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: true,
	vite: {
		vue: {
			customElement: true
		}
	},
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	srcDir: "src/",
	modules: [
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"]
			}
		],
		"nuxt-multi-cache"
	],
	components: {
		dirs: ["~/components"]
	},
	multiCache: {
		component: {
			enabled: true
		},
		route: {
			enabled: true
		},
		debug: true
	},
	imports: {
		dirs: ["stores"]
	},
	app: {
		layoutTransition: { name: "layout", mode: "out-in" }
	},
	routeRules: {
		"/": { prerender: true },
		"/inscription": { prerender: true }
	},
	runtimeConfig: {
		public: {
			apiBase: process.env.API_BASE || ""
		}
	}
});
