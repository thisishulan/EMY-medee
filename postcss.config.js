const cssnano = require('cssnano');
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-nested'),
    require('tailwindcss'),
    cssnano({
      preset: 'default',
    }),
    require('autoprefixer'),
  ]
}