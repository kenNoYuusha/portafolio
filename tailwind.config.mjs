import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".jluis": {
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-30px)",
            },
            "100%": {
              transform: "translateY(0)",
            },
          },
          backgroundColor: theme("colors.indigo.500"),
        },
        "dialog[open]": {
          transform: "scale(1)",
          transition: "transform .3s ease-in-out",
          "@starting-style": {
            transform: "scale(0)",
          },
        },
        dialog: {
          transform: "scale(0)",
          transition: "transform .3s ease, display .3s ease allow-discrete",
        },
      });
    },
  ],
};
