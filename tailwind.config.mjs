import plugin from "tailwindcss"
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        "spin-slow": "spin 10s linear infinite",
        opacityAndTranslateY: "opacityAndTranslateY 0.5s ease-in-out",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        primary: "var(--primary)",
        primaryLight: "var(--primaryLight)",
        secondary: "var(--secondary)",
      },
      dropShadow: {
        service: "3px 4px 12px rgba(154, 152, 205, 0.25)",
      },
      letterSpacing: {
        h2: "2px",
      },
      width: {
        seal: "164px",
        sealMobile: "82px",
      },
      height: {
        seal: "164px",
        sealMobile: "82px",
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
      scrollMargin: {
        sectionPaddingY: "var(--sectionPaddingY)",
      },
      padding: {
        sectionPadding: "var(--sectionPadding)",
        sectionPaddingMobile: "var(--sectionPaddingMobile)",
        sectionPaddingX: "var(--sectionPaddingX)",
        sectionPaddingXMobile: "var(--sectionPaddingXMobile)",
        sectionPaddingY: "var(--sectionPaddingY)",
        sectionPaddingYMobile: "var(--sectionPaddingYMobile)",
      },
      fontFamily: {
        "--clash": ["Clash Display", "sans-serif"],
      },
    },
  },
  plugins: [
    addVariablesForColors,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            }
          },
        },
        {
          values: theme("transitionDelay"),
        }
      )
    }),
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars,
  })
}
