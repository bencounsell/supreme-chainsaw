let mix = require('laravel-mix');
let tailwindcss = require("tailwindcss");

mix.js('src/js/app.js', 'public/js')
   .sass('src/scss/eton.scss', 'public/css')
   .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.js')],
   });