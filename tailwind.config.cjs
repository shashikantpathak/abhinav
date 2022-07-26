function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
	darkMode: 'media',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			desktop: '1440px',
			tablet: '1260px',
		},

		boxShadow: {
			sm: '0px 4px 12px 0px rgba(0,0,0,0.04)',
			lg: '0px 8px 20px 0px rgba(18,16,99,0.06)',
		},

		fontSize: {
			xsss: ['12px', { lineHeight: '14px', letterSpacing: '-0.03em' }],
			xss: ['16px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
			sm: [
				'clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)',
				'1.4',
				{ lineHeight: '27px' },
			],
			base: ['clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)', '1.5'],
			lg: ['clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)', '1.4'],
			xl: ['clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)', '1.4'],
			'2xl': ['clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)', '1.2'],
			'3xl': ['clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)', '1.1'],
			// '4xl': ['72px', { lineHeight: '84.38px' }],
			'4xl': ['clamp(2.03rem, calc(1.03rem + 4.98vw), 4.10rem)', '1'],
			'5xl': ['clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)', '1'],
			'6xl': ['clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)', '1'],
			// xss: [
			// 	'clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)',
			// 	'1.4',
			// 	{ lineHeight: '24px', letterSpacing: '-0.03em' },
			// ],
			// xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
			// sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
			// lg: ['18px', { lineHeight: '27px' }],
			// xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
			// '2xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
			// '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
			// '4xl': ['72px', { lineHeight: '84.38px' }],
			// '5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
		},
		fontFamily: {
			sans: ['Outfit', 'sans-serif'],
		},

		extend: {
			backgroundImage: {
				texture:
					// eslint-disable-next-line quotes
					"url('./src/assets/img/vectors/vectorcurve.svg')",
				// eslint-disable-next-line quotes
				test: "url('./src/assets/img/home-content.png')",
			},
			blur: {
				px: '1px',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},

			lineClamp: {
				10: '10',
			},

			dropShadow: {
				'text-sm': '0px 4px 12px 0px rgba(0,0,0,0.04)',
				'text-md': '1px 2px 0px rgba(0, 0, 0, 0.90)',
				'text-lg': '1px 4px 0px rgba(0, 0, 0, 0.90)',
			},
			textColor: {
				skin: {
					base: withOpacity('--color-text-base'),
					muted: withOpacity('--color-text-muted'),
					inverted: withOpacity('--color-text-inverted'),
					basegrey: withOpacity('--color-text-tertiary-gray'),
					'djuli-primary': withOpacity('--color-djuli-primary'),
					'grey-muted': '#666666',
					'grey-faint': '#B6B6B6',
					'djuli-primary-color': '#30C56F',
					'djuli-secondary-color': '#1E1E51',
				},
			},

			backgroundColor: {
				skin: {
					fill: withOpacity('--color-fill'),
					'button-accent': withOpacity('--color-button-accent'),
					'button-accent-hover': withOpacity(
						'--color-button-accent-hover',
					),
					'button-muted': withOpacity('--color-button-muted'),
					'djuli-primary-color': '#30C56F',
					'djuli-secondary-color': '#1E1E51',
				},
			},
			colors: {
				bkg: '#171819',
				muted: '#C9CBCF',
				accent: '#66CCC1',
			},

			gradientColorStops: {
				skin: {
					hue: withOpacity('--color-fill'),
				},
			},
			// fontSize: {
			// 	sm: ['clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)', '1.4'],
			// 	base: ['clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)', '1.5'],
			// 	lg: ['clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)', '1.4'],
			// 	xl: ['clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)', '1.4'],
			// 	'2xl': ['clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)', '1.2'],
			// 	'3xl': ['clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)', '1.1'],
			// 	'4xl': ['clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)', '1'],
			// 	'5xl': ['clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)', '1'],
			// 	'6xl': ['clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)', '1'],
			// },
			screens: {
				xs: '425px',
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
					backgroundColor: 'white ',
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
				h1: { fontSize: theme('fontSize.2xl') },
				h2: { fontSize: theme('fontSize.xl') },
				h3: { fontSize: theme('fontSize.lg') },
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
