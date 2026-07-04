// Design Tokens for Cantina Gremes

export const COLORS = {
  nero: "#1a1a1a",
  avorio: "#f5f3f0",
  beige: "#d4ccc4",
  verde: "#2d4a3d",
  oro: "#a89968",
  vino: "#6b3d3d",
};

export const TYPOGRAPHY = {
  fonts: {
    serif: "Playfair Display, serif",
    sans: "Inter, sans-serif",
  },
  h1: {
    fontSize: "64px",
    lineHeight: "1.1",
    fontWeight: "700",
  },
  h2: {
    fontSize: "48px",
    lineHeight: "1.15",
    fontWeight: "600",
  },
  h3: {
    fontSize: "28px",
    lineHeight: "1.2",
    fontWeight: "600",
  },
  body: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
};

export const SPACING = {
  baseUnit: "8px",
  sectionDesktop: "80px",
  sectionMobile: "40px",
};

export const ANIMATION = {
  reveal: {
    duration: "600ms",
    easing: "cubic-bezier(0.33, 0.66, 0.66, 1)",
  },
  parallax: {
    offset: "30-40%",
  },
};

export const BREAKPOINTS = {
  mobile: "640px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1280px",
};
