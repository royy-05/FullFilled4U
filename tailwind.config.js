/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#EC2D2E",
          "red-hover": "#D81F20",
          navy: "#282734",
          surface: "#F8F9FC",
          border: "#E5E7EB",
          "text-secondary": "#6B7280",
          "text-body": "#4B5563",
          success: "#22C55E",
          warning: "#F59E0B",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Instrument Serif', 'Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
