import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        tertiary: "var(--tertiary)",
        "brand-white": "var(--brand-white)",
        "lighter-dark-blue": "var(--lighter-dark-blue)",
        "brand-dark": "var(--brand-dark)",
        "brand-slat": "var(--brand-slat)",
        "text-black": "var(--text-black)",
        "brand-orange": "var(--brand-orange)",
        "brand-dark-orange": "var(--brand-dark-orange)",
        "brand-deep-violet": "var(--brand-deep-violet)",
        "brand-teal": "var(--brand-teal)",
        "brand-dark-teal": "var(--brand-dark-teal)",
        "brand-purple": "var(--brand-purple)",
        "brand-dark-purple": "var(--brand-dark-purple)",
        "brand-violet": "var(--brand-violet)",
        "brand-red": "var(--brand-red)",
        "brand-light-pink": "var(--brand-light-pink)",
      },

      "brand-gray": {
        100: "#F7FAFC",
        200: "#EDF2F7",
        250: "rgba(229 ,231, 225, 1)",
        300: "rgba(209 ,213, 219, 1)",
        400: "rgba(156, 163, 175, 1)",
        500: "rgba(107, 114, 128 ,1)",
        600: "rgba(75, 85, 99, 1)",
        700: "rgba(55, 65, 81 ,1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
