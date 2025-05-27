/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // THIS IS REQUIRED
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "night"], // You can add more themes here
    },
  };