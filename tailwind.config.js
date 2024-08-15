/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blinkNeon": {
          "70%": {
            opacity: " 1;"
          },
          "79%": {
            opacity: " 0;"
          },
          "81%": {
            opacity: " 1;"
          },
          "82%": {
            opacity: " 0;"
          },
          "83%": {
            opacity: " 1;"
          },
          "92%": {
            opacity: " 0;"
          },
          "92.5%": {
            opacity: " 1;"
          },
        },
        glow: {

          "0%": {
            filter: "brightness(1)  saturate(1);"
          },

          "50%": {
            filter: "brightness(2)  saturate(2);"
          },

          "100%": {
            filter: "brightness(1)  saturate(1);"
          }
        },

        colorRotation: {
          "0%": {
            filter: "hue-rotate(-180deg);"
          },

          "50%": {
            filter: "hue-rotate(180deg);"
          },

          "100%": {
            filter: "hue-rotate(-180deg);"
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "Blink": "blinkNeon 3s ease-in-out infinite",
        "glow": "glow 2s infinite",
        "hueRotation": "colorRotation 8s infinite linear forwards",

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
