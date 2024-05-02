/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cerulea-blue": "#0483c0",
        "cerulea-gold": "#d5b06a",
        "cerulea-green": "#177a57",
        "cerulea-red": "#b31b2e",
        "background-green": "#d3dfd3",
        "background-gold": "#f7efcc",
        "background-blue": "#cbddf0",
        "background-red": "#eecbc1",
        "text-light": "#fff",
        "text-dark": "#000",
      },
      fontFamily: {
        enterCommand: ["EnterCommand", "sans-serif"],
        enterCommandBold: ["Bold", "sans-serif"],
        enterCommandItalic: ["Italic", "sans-serif"],
      },
      fontSize: {
        base: ["20px", "24px"],
        sm: ["18px", "22px"],
        lg: ["24px", "30px"],
        xl: ["32px", "1.5"],
        "2xl": ["40px", "48px"],
        "4xl": ["48px", "52px"],
        "5xl": ["48px", "1"],
        "6xl": ["80px", "96px"],
      },
      height: {
        mhero: ["377px"],
        "max-content": "max-content",
      },
      margin: {
        36: "148px",
      },
      dropShadow: {
        button: "0 5px 2px rgba(0, 0, 0, 0.9)",
        card: "0 4px 2px rgba(0, 0, 0, 0.5)",
        section: "0 3px 3px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
