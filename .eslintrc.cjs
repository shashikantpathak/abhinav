module.exports = {
	env: {
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
	rules: {
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
		// 'vue/no-unused-vars': 'off'
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// 'allow async-await'
		'generator-star-spacing': 0,
		'no-debugger': 'warn',
		'no-unused-vars': 'error',
		'no-console': 'warn',
	},
};
