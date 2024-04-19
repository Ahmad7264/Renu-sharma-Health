

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      colors: {
        nSilver: "#F5F7FA",
        dGrey: "#4D4D4D",
        bPrimary: "#4CAF4F",
        nGrey: "#717171",
      },
    },
  },
  plugins: [],
};
