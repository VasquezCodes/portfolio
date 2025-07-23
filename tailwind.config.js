// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        slide: 'slide 30s linear infinite',
        blink: 'blink 1s step-end infinite',
        fadeIn: 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
