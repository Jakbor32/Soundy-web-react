/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                hvrNavClr: "#CCA873",
                plusArrowClr: "#4B96AC",
                redBarClr: "#5B0000",
                featuredBgClr: "#0D0B0B",
                featuredTitleClr: "#D4B11C",
                tourBarClr: "#270202",
                starClr: "#FFB800",
                promoBgClr: "#0F0303",
                footerBtnClr: "#1E1C1C",
                hrClr: "#FFE7E7"
            }
        },
        fontFamily: {
            "rubik": ["rubik", "sans-serif"]
        },

    },
    plugins: [],
}