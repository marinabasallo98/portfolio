/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        sakura: {
          primary: "#E76F51",
          secondary: "#2A9D8F",
          accent: "#F4A261",
          neutral: "#1C1C1C",
          "base-100": "#FFFFFF",
          "base-200": "#F9F9F9",
        },
      },
    ],
  },
}
