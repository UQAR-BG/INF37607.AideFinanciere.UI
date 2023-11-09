// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	vite: {
		vue: {
			customElement: true
		}
	},
	css: ["~/assets/css/main.css"],
	srcDir: "src/",
	modules: [
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"]
			}
		]
	],
	components: {
		global: true,
		dirs: ["~/components"]
	},
	imports: {
		dirs: ["stores"]
	},
	app: {
		layoutTransition: { name: "layout", mode: "out-in" }
	}
});
