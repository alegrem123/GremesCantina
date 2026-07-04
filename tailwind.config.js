/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nero: "#1a1a1a",
        avorio: "#f5f3f0",
        beige: "#d4ccc4",
        verde: "#2d4a3d",
        oro: "#a89968",
        vino: "#6b3d3d",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: ["96px", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["48px", { lineHeight: "1.15", fontWeight: "600" }],
        h3: ["28px", { lineHeight: "1.2", fontWeight: "600" }],
        body: ["16px", { lineHeight: "1.6" }],
      },
      spacing: {
        "section-desktop": "80px",
        "section-mobile": "40px",
      },
      padding: {
        "section-desktop": "80px",
        "section-mobile": "40px",
      },
      gap: {
        base: "8px",
      },
    },
  },
  plugins: [],
};
