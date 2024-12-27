/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        cookie: ["Cookie", "serif"]
      },
    },
  },
  plugins: [],
}

export default config;