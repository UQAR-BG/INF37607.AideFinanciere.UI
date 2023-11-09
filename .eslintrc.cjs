module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"plugin:vue/vue3-essential",
		"plugin:prettier/recommended",
		"eslint:recommended"
	],
	overrides: [
		{
			// These pages are not used directly by users so they can have one-word names.
			files: [
				"**/pages/**/*.{js,ts,vue}",
				"**/layouts/**/*.{js,ts,vue}",
				"**/app.{js,ts,vue}",
				"**/error.{js,ts,vue}"
			],
			rules: { "vue/multi-word-component-names": "off" }
		}
	],
	rules: {
		semi: "always"
	},
	parserOptions: {
		ecmaVersion: "latest"
	}
};
