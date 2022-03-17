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
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'splash-hex': '#6BD1D2',
      'splash-rgba': 'rgba(107, 209, 210,1.0)',
      'splash-hsla': 'hsla(181, 53%, 62%, 1.0)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    backgroundImages:{
      'default':'url("./public/10475996-3x2-940x627.jpeg")'
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