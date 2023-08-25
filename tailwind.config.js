module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        blackBlackground: "#141518",
        blackLayer: "#1E1F25",
        blackCommon: "#282C38",
        gray: "#9092A3",
        grayBase: "#3C4254"
      },
      borderRadius: {
        baseRadius: "10px",
        sm: "0.125rem", // Small
        md: "10px", // Medium
        lg: "18px", // Large
        xl: "1.5rem", // Extra Large
        xl2: '24px'
      },
    },
  },
  plugins: [],
};
