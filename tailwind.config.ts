
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#F97316",
          foreground: "hsl(var(--secondary-foreground))",
        },
        neon: {
          purple: "#9b87f5",
          blue: "#1EAEDB",
          pink: "#D946EF",
          orange: "#F97316",
        },
        cyber: {
          dark: "#0d0d12", // Darker background color
          light: "#D6BCFA",
        },
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(rgba(40, 40, 40, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(40, 40, 40, 0.1) 1px, transparent 1px)",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow": {
          "0%, 100%": { opacity: "1", filter: "brightness(1.2)" },
          "50%": { opacity: "0.8", filter: "brightness(0.9)" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(0.95)" },
        },
        "rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fadeIn": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "pulse": "pulse 3s ease-in-out infinite",
        "rotate": "rotate 10s linear infinite",
        "fadeIn": "fadeIn 0.6s ease-out forwards",
        "shimmer": "shimmer 2s infinite linear",
      },
      boxShadow: {
        'glow': '0 0 15px rgba(155, 135, 245, 0.5)',
        'neon': '0 0 10px rgba(217, 70, 239, 0.7)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
