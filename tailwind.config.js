/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
            scale: 1,
            fontSize: "40px",
          },
          "30%": {
            opacity: 0.8,
            transform: "translateY(-100px)",
            fontSize: "60px",
          },
          "60%": {
            opacity: 0.5,
            transform: "translateY(-150px)",
            fontSize: "50px",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-180px) easy-out",
          },
        },
      },
      animation: {
        "floatUp-hand": "floatUp 2s",
      },
    },
  },
  plugins: [],
};
