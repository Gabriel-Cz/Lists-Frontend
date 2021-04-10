module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': {'main': '#A1E18B', 'hover': '#3B82F6'},
      'secondary': {'main': '#34D399', 'hover': '#10B981'},
      'danger': {'main': '#F87171', 'hover': '#EF4444'},

    }),
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'shapes': 'url(../assets/svg/Shapes.svg)',
        'medium-sphere': 'url(../assets/svg/medium-sphere.svg)',
        'big-sphere': 'url(../assets/svg/big-sphere.svg)',
        'bg-form-pattern': 'linear-gradient(54.58deg, rgba(224, 224, 224, 0.25) 8.37%, rgba(250, 250, 250, 0) 98.69%);',
        'backgroundPageColor': "linear-gradient(90deg, rgba(226,226,226,0.1) 1%, rgba(212,206,206,0.35) 30%, rgba(223,214,214,0.25) 70%, rgba(224,215,215,0.15) 100%);",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
