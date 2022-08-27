// function withOpacity(variableName) {
// 	return ({ opacityValue }) => {
// 		if (opacityValue !== undefined) {
// 			return `rgba(var(${variableName}), ${opacityValue})`;
// 		}
// 		return `rgb(var(${variableName}))`;
// 	};
// }

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
	darkMode: 'media',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			textColor: {
				skin: {
					green: {
						500: '#30c56f',
					},
					stone: {
						500: '#666666',
					},
					emerald: {
						200: '#a7e1bf',
					},
					white: '#ffffff',
					'primary-dark': '#1E1E51',
				},
			},
			backgroundColor: {
				skin: {
					green: {
						500: '#30c56f',
					},
					stone: {
						500: '#666666',
					},
					emerald: {
						200: '#a7e1bf',
					},
					white: '#ffffff',
					'primary-dark': '#1E1E51',
				},
			},
			backgroundImage: {
				texture:
					// eslint-disable-next-line quotes
					"url('@/assets/img/vectors/curve.svg')",
			},
		},
	},

	plugins: [
		plugin(({ addUtilities, theme }) => {
			addUtilities({
				'.fade-up': {
					transition:
						'transform 1s cubic-bezier(0.64, 0.04, 0.26, 0.87), opacity 0.8s cubic-bezier(0.64, 0.04, 0.26, 0.87)',
					opacity: theme('opacity.0'),
					transform: 'translate3d(0, 2rem, 0)',
				},
				'.faded': {
					opacity: theme('opacity.100'),
					transform: 'translate3d(0, 0, 0)',
				},
				'.features-text': {
					'text-transform': 'uppercase',
					'-webkit-text-stroke': '1px #eaeaea',
					color: 'white',
				},
				testinomial: {
					display: 'flex',
					'flex-direction': 'row',
					'align-items': 'center',
					padding: '0px',
					gap: '116px',

					width: '747px',
					height: '393px',
				},
			});
		}),
		plugin(function ({ addComponents }) {
			addComponents({
				'.green-btn': {
					'border-radius': '0.5rem',
					'align-items': 'center',
					cursor: 'pointer',
					'justify-content': 'center',
					height: '4rem',
					display: 'flex',
					// backgroundColor: '#30C56F',
					// color: 'white',
					// opacity: 0.9,
					'font-weight': 'normal',
					'box-shadow': '0px 16px 24px rgba(0, 0, 0, 0.12)',
					// '&:hover': {
					// 	backgroundColor: '#30C56D',
					// 	opacity: 1,
					// },
				},
				'.green-txtbtn': {
					'align-items': 'center',
					cursor: 'pointer',
					'justify-content': 'center',
					height: '4rem',
					display: 'flex',
					backgroundColor: 'transparent ',
					border: '1px',
					'border-radius': '8px',
					// color: '#30C56F',
					'box-shadow': 'none',
					// '&:hover': {
					// 	'box-shadow': '0px 16px 24px rgba(0, 0, 0, 0.12)',
					// },
				},
				'.btn-red': {
					backgroundColor: '#e3342f',
					color: '#fff',
					'&:hover': {
						backgroundColor: '#cc1f1a',
					},
				},
				'.card': {
					'background-color': '#fff',
					'border-radius': '.25rem',
					'box-shadow': '0 2px 4px rgba(0,0,0,0.2)',
				},
				'.btn-green': {
					backgroundColor: 'green',
					color: '#fff',
					'&:hover': {
						backgroundColor: '#2779bd',
					},
				},
			});
		}),
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: {
					fontSize: theme('fontSize.2xl'),
				},
				h2: {
					fontSize: theme('fontSize.xl'),
				},
				h3: {
					fontSize: theme('fontSize.lg'),
				},
			});
		}),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
	],
	variants: {
		extend: {
			grayscale: ['hover'],
			sepia: ['hover'],
			invert: ['hover'],
			dropShadow: ['hover'],
		},
	},
};
