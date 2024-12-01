/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    colors: {
            "main": "var(--main)",
            "secondary": "var(--secondary)",
            "third": "var(--third)",
            "bg": "var(--bg)",
            "content": "var(--content)",
        },
    extend: {},
  },
  plugins: [],
}