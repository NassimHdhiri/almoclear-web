module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "backgrounddark-green": "var(--backgrounddark-green)",
        backgroundgreen: "var(--backgroundgreen)",
        "contentalpha-80": "var(--contentalpha-80)",
        contentreversed: "var(--contentreversed)",
        "home-p": "var(--home-p)",
        white: "var(--white)",
        "x-100": "var(--x-100)",
        "x-200": "var(--x-200)",
        "x-800": "var(--x-800)",
        "x-900": "var(--x-900)",
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
      fontFamily: {
        "body-200": "var(--body-200-font-family)",
        "body-300": "var(--body-300-font-family)",
        "body-body-2-14-px-medium":
          "var(--body-body-2-14-px-medium-font-family)",
        "body-m": "var(--body-m-font-family)",
        button: "var(--button-font-family)",
        "display-d1": "var(--display-d1-font-family)",
        "h1-up": "var(--h1-up-font-family)",
        "heading-h1": "var(--heading-h1-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h3": "var(--heading-h3-font-family)",
        "heading-h4": "var(--heading-h4-font-family)",
        "headline-h-3-48-px-bold": "var(--headline-h-3-48-px-bold-font-family)",
        "label-200": "var(--label-200-font-family)",
        navigation: "var(--navigation-font-family)",
        "title-title-4-18-px-bold":
          "var(--title-title-4-18-px-bold-font-family)",
        "title-title-4-18-px-regular":
          "var(--title-title-4-18-px-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "shadow-l": "var(--shadow-l)" },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
