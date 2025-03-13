/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
    require('postcss-nested')
  ]
}

module.exports = config