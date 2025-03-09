module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
    "./app/views/**/*.html.slim",
    "./app/javascript/**/*.tsx",
  ],
  safelist: [
    'alert-error',
    'alert-success',
  ],
  plugins: [require("daisyui"), require("prettier-plugin-tailwindcss")],
  daisyui: {
    themes: ["winter"],
  },
};
