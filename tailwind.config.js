function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`;
		}
		return `rgb(var(${variable}) / ${opacityValue})`;
	};
}
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,jsx}'],
	prefix: 'tw-',
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'splash-hex': '#6BD1D2',
			'splash-rgba': 'rgba(107, 209, 210,1.0)',
			'splash-hsla': 'hsla(181, 53%, 62%, 1.0)',

			'ngc-blue-hex': { DEFAULT: '#4B76AC', 50: '#273e5a', 100: '#2d4768', 200: '#335175', 300: '#3f6391', 400: '#456d9e', 500: '#4B76AC', 600: '#5680b5', 700: '#638abb', 800: '#7194c1', 900: '#7e9fc7' },
			'ngc-green-hex': { DEFAULT: '#79D9B6', 50: '#FFFFFF', 100: '#F8FDFB', 200: '#D8F4EA', 300: '#B9EBD9', 400: '#99E2C7', 500: '#79D9B6', 600: '#4DCD9E', 700: '#32B082', 800: '#258462', 900: '#195941' },
			'ngc-orange-hex': { DEFAULT: '#F27F3D', 50: '#FEF1E9', 100: '#FCE4D6', 200: '#FACBB0', 300: '#F7B189', 400: '#F59863', 500: '#F27F3D', 600: '#E75E10', 700: '#B3490C', 800: '#7E3308', 900: '#4A1E05' },
			'ngc-dark-orange-hex': { DEFAULT: '#D95D30', 50: '#F5D6CB', 100: '#F2C9BA', 200: '#ECAE97', 300: '#E69375', 400: '#DF7852', 500: '#D95D30', 600: '#B04720', 700: '#813418', 800: '#52210F', 900: '#220E06' },
			'ngc-light-pink-hex': { DEFAULT: '#F2DBD5', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#FFFFFF', 400: '#FCF6F4', 500: '#F2DBD5', 600: '#E5B6AA', 700: '#D7927F', 800: '#CA6D54', 900: '#B05037' },

			'ngc-blue-rgba': 'rgba(75, 118, 172, 1)',
			'ngc-green-rgba': 'rgba(121, 217, 182, 1)',
			'ngc-orange-rgba': 'rgba(242, 127, 61, 1)',
			'ngc-dark-orange-rgba': 'rgba(217, 93, 48, 1)',
			'ngc-light-pink-rgba': 'rgba(242, 219, 213, 1)',

			'ngc-blue-hsla': 'hsla(213.4, 39.3, 48.4, 1)',
			'ngc-green-hsla': 'hsla(158, 55, 66, 1)',
			'ngc-orange-hsla': 'hsla(21, 87, 59, 1)',
			'ngc-dark-orange-hsla': 'hsla(15, 68, 51, 1)',
			'ngc-light-pink-hsla': 'hsla(12, 52, 89, 1)',
		},
		gridTemplateColumns: {
			minmax10: 'repeat(3, minmax(10rem, 1fr))',
		},
		boxShadows: {
			'hr-white': '0 0 0 0.25px rgba(250, 250, 250, 1.0)',
			thinBlackBorder: '0 0 0 0.25px rgba(107, 144, 191, 1.0)',
		},
		fontFamily: {
			opensans: ['Open Sans', 'sans-serif'],
		},
		backgroundImages: {
			...(process.env.NODE_ENV === 'production' ? { default: 'url("../img/10475996-3x2-940x627.jpg")' } : { default: 'url("../img/10475996-3x2-940x627.jpg")' }),
		},
		fontSizes: {
			h1: '3.2rem',
			h1Mobile: '2.8rem',
			navXs: '2rem',
			default: '1.6rem',
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
				'gallery-three-cols': 'calc(33.333333% - 1rem)',
				'gallery-two-cols': 'calc(50% - 1rem)',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			keyframes: {
				h1Spread: {
					'0%': { letterSpacing: '0.75vw', opacity: 0.0 },
					'100%': { letterSpacing: '1vw', opacity: 1.0 },
				},
			},
			animation: {
				h1Spread: 'h1Spread 1s ease-in-out 1',
			},
		},
	},
	prefix: 'tw-',
	plugins: [],
};
