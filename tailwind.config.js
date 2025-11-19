/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        terracotta: "#B26E63",
        sand: "#E9D8A6",
        olive: "#6B705C",
        charcoal: "#2F2F2F",
        cream: "#F5F3EF",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
