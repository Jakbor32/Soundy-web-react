
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
                featuredFooterBg: "#0D0B0B",
                featuredTitleClr: "#D4B11C",
                tourBarClr: "#270202",
                starClr: "#FFB800",
                promoBgClr: "#0F0303",
                footerBtnClr: "#1E1C1C",
                hrClr: "#FFE7E7",
                brandBarClr: "#110F0F"
            },
            maxWidth: {
                '8xl': '90rem',
            },
            backgroundOpacity: {
                '97': '0.97',
            }

        },
        fontFamily: {
            "rubik": ["rubik", "sans-serif"],
            "saira-stencil-one": ["saira stencil one", "sans-serif"],
            "epilogue": ["epilogue", "sans-serif"],
            "gotu": ["gotu", "sans-serif"],
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

        },
        animation: {
            "slide-down": "slideDown .5s ease forwards",

        },


    },
    plugins: [
        
    ],
}