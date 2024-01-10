/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {},
    screens: {
      sm: { max: "768px" },
      md: { min: "769px", max: "1200px" },
      lg: { min: "1200px" },
    },
    extend: {},
    colors: {
      background: "var(--background)",
      "background-secondary": "var(--background---secondary)",
      "caption-label": "var(--caption--label-text)",
      "call-to-action": "var(--call-to-action)",
      celeste: "var(--celeste)",
      white: "#ffffff",
      red: "red",
      green: "green",
    },
    boxShadow: {},
    fontSize: {
      base: "16px",
      l: "22px",
      m: "16px",
      s: "12px",
      xl: "28px",
      "2xl": "38px",
      "3xl": "51px",
      "4xl": "67px",
    },
    fontFamily: {
      "space-mono": "var(--font-family-space_mono)",
    },
  },
  plugins: [],
};
