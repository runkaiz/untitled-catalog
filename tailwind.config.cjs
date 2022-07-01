const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: ["lofi", "synthwave"],
		darkTheme: "synthwave",
	},

	plugins: [forms, typography, daisyui]
};

module.exports = config;
