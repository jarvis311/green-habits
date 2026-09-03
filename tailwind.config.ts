import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px", // tablet
      lg: "1280px", // desktop
    },
    extend: {
      colors: {
        cream: "#FDFBF7",
        sand: "#F5F2EB",
        ink: "#1C211F",
        sage: {
          DEFAULT: "#3D6346",
          tint: "#EDF2EE",
        },
        clay: {
          DEFAULT: "#C4684D",
          tint: "#FBF0EC",
        },
        border: "#E8E4DB",
        muted: "#6B726E",
        success: "#2E7D32",
        warning: "#ED6C02",
        error: "#D32F2F",
        info: "#0288D1",
        neutral: {
          50: "#FAF9F5",
          100: "#F4F2EB",
          200: "#E9E5DC",
          300: "#DDD7CE",
          400: "#C2BAB0",
          500: "#A2998F",
          600: "#837A71",
          700: "#645D56",
          800: "#443F3A",
          900: "#1C1B19",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["4.75rem", { lineHeight: "0.95" }],
        display: ["3rem", { lineHeight: "1.1" }],
        h1: ["2.25rem", { lineHeight: "1.2" }],
        h2: ["1.75rem", { lineHeight: "1.3" }],
        h3: ["1.25rem", { lineHeight: "1.4" }],
        h4: ["1.125rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["0.9375rem", { lineHeight: "1.6" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.5" }],
        caption: ["0.6875rem", { lineHeight: "1.4" }],
        overline: ["0.75rem", { lineHeight: "1.2" }],
      },
      spacing: {
        4.5: "1.125rem",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        elevated: "0px 8px 12px rgba(0,0,0,0.05)",
      },
      maxWidth: {
        content: "1280px",
      },
      transitionDuration: {
        150: "150ms",
      },
    },
  },
  plugins: [],
};
export default config;
