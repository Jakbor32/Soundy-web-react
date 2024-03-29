/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hvrNavClr: "#CCA873",
        plusArrowClr: "#4B96AC",
        redBarClr: "#5B0000",
        featuredFooterBg: "#0D0B0B",
        featuredTitleClr: "#D4B11C",
        tourBarClr: "#270202",
        starClr: "#FFB800",
        promoBgClr: "#0F0303",
        footerBtnClr: "#1E1C1C",
        hrClr: "#FFE7E7",
        brandBarClr: "#110F0F",
        bgTicketClr: "#270202",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      backgroundOpacity: {
        97: "0.97",
      },
    },
    fontFamily: {
      rubik: ["rubik", "sans-serif"],
      "saira-stencil-one": ["saira stencil one", "sans-serif"],
      epilogue: ["epilogue", "sans-serif"],
      gotu: ["gotu", "sans-serif"],
      oregano: ["oregano", "sans-serif"],
    },

    keyframes: {
      slideDown: {
        "0%": {
          transform: "translateY(-100%)",
        },
        "100%": {
          transform: "translateY(0)",
        },
      },
      slideUp: {
        "0%": {
          transform: "translateY(0)",
        },
        "100%": {
          transform: "translateY(-100%)",
        },
      },
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden",
        },
        "100%": {
          width: "100%",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "white",
        },
      },
      ping: {
        "40%": {
          transform: "scale(1)",
          opacity: "0",
        },
      },
      fadeInUp: {
        from: {
          opacity: 0,
          transform: "rotate(-180deg) translateY(-10rem)",
        },
        to: {
          opacity: 1,
          top: "0",
          transform: "rotate(0deg) translateY(0rem)",
        },
      },
    },
    animation: {
      "slide-down": "slideDown .5s ease forwards",
      "slide-up": "slideUp .5s ease forwards",
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      ping: "ping 2s ease-in infinite",
      fadeInUp: "fadeInUp 1s ease",
    },
  },
  plugins: [],
};
