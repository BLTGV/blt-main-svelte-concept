import tailwindcss from "tailwindcss";

// only needed if you want to purge
// const purgecss = require("@fullhuman/postcss-purgecss")({
//   content: ["./src/**/*.svelte", "./src/**/*.html"],
//   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// });

export const plugins = [tailwindcss("./tailwind.js")];
