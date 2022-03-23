module.exports = {
	mode: "jit",
	content: ["./src/**/*.{html,jsx}"],
	prefix: "tw-",
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			"splash-hex": "#6BD1D2",
			"splash-rgba": "rgba(107, 209, 210,1.0)",
			"splash-hsla": "hsla(181, 53%, 62%, 1.0)",

			"ngc-blue-hex": "#6B90BF",
			"ngc-green-hex": "#79D9B6",
			"ngc-orange-hex": "#F27F3D",
			"ngc-dark-orange-hex": "#D95D30",
			"ngc-light-pink-hex": "#F2DBD5",

			"ngc-blue-rgba": "rgba(107, 144, 191, 1)",
			"ngc-green-rgba": "rgba(121, 217, 182, 1)",
			"ngc-orange-rgba": "rgba(242, 127, 61, 1)",
			"ngc-dark-orange-rgba": "rgba(217, 93, 48, 1)",
			"ngc-light-pink-rgba": "rgba(242, 219, 213, 1)",

			"ngc-blue-hsla": "hsla(213, 39, 58, 1)",
			"ngc-green-hsla": "hsla(158, 55, 66, 1)",
			"ngc-orange-hsla": "hsla(21, 87, 59, 1)",
			"ngc-dark-orange-hsla": "hsla(15, 68, 51, 1)",
			"ngc-light-pink-hsla": "hsla(12, 52, 89, 1)",
		},
		fontFamily: {
			opensans: ["Open Sans", "sans-serif"],
		},
		backgroundImages: {
			default: 'url("./10475996-3x2-940x627.jpeg")',
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
      keyframes: {
        h1Spread: {
          '0%': { letterSpacing: '0.75vw', opacity:0.0 },
          '100%': { letterSpacing: '1vw', opacity:1.0 }
        }
      },
      animation: {
        h1Spread: 'h1Spread 1s ease-in-out 1'
       }
		},
	},
	prefix: "tw-",
	plugins: [],
};
