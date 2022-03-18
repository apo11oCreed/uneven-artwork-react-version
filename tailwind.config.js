module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,jsx}"],
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
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    backgroundImages:{
      'default':'url("./10475996-3x2-940x627.jpeg")'
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  prefix: 'tw-',
  plugins: [],
}