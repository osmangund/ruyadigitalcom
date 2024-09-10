/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        // background: "var(--background)",
        // text: "var(--text)",
      },
      dropShadow: {
        service: "3px 4px 12px rgba(154, 152, 205, 0.25)",
      },
      letterSpacing: {
        h2: "2px",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        circle: "4px 4px 100px 0px rgba(255,255,255, 0.5)",
      },
      borderRadius: {
        default: "var(--borderRadius)",
      },
      padding: {
        sectionPadding: "var(--sectionPadding)",
        sectionPaddingX: "var(--sectionPaddingX)",
        sectionPaddingY: "var(--sectionPaddingY)",
      },
      fontFamily: {
        "--clash": ["Clash Display", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
}
