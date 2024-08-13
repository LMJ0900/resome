import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        font1: ["font1"],
        font2: ["font2"],
        ggunFont1: ["ggunFont1"],
        ggunFont2: ["ggunFont2"],
        ggunFont3: ["ggunFont3"],
      },
      margin: {
        "440px": "440px",
        "150px": "150px",
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
        
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
        desktop: "1600px",
      },
      animation: {
        TransBottomTest: "TransBottomTest 1.5s ease-in-out",
        Transleft: "TransRight 1.5s ease-in-out",
        TransRightTest: "TransRightTest 1.5s ease-in-out",
        TransleftTest: "TransleftTest 1.5s ease-in-out",
        TransTopTest: "TransTopTest 1.5s ease-in-out",
        TransRight: "TransRight 1.5s ease-in-out",
        ImgHover: "ImgHover 0.5s ease-in-out forwards",
      }, 
      keyframes: {
        TransBottomTest: {
          "0%": { transform: "translateY(70rem)", opacity: "0" },
          "100%": { transform: "translateX(0rem)", opacity: "1" },
        },
        TransleftTest: {
          "0%": { transform: "translateX(-70rem)", opacity: "0" },
          "100%": { transform: "translateX(0rem)", opacity: "1" },
        },
        TransRightTest: {
          "0%": { transform: "translateX(70rem)", opacity: "0" },
          "100%": { transform: "translateX(0rem)", opacity: "1" },
        },
        TransTopTest: {
          "0%": { transform: "translateY(-70rem)", opacity: "0" },
          "100%": { transform: "translateY(0rem)", opacity: "1" },
        },
        Transleft: {
          "0%": { transform: "translateX(23rem)" },
          "100%": { transform: "translateX(0rem)" },
        },
        TransRight: {
          "0%": { transform: "translateX(0rem)" },
          "100%": { transform: "translateX(23rem)" },
        },
        aniUp: {
          "0%": { transform: "scale(100%,100%)" },
          "50%": { transform: "scale(100%,200%)" },
          "100%": { transform: "scale(100%,150%)" },
        },
        aniUp2: {
          "0%": { transform: "scale(100%,100%)" },
          "50%": { transform: "scale(100%,200%)" },
          "100%": { transform: "scale(100%,250%)" },
        },
        aniUp3: {
          "0%": { transform: "scale(100%,100%)" },
          "50%": { transform: "scale(100%,250%)" },
          "100%": { transform: "scale(100%,120%)" },
        },
        aniDown: {
          "0%": { transform: "scale(100%,100%)" },
          "50%": { transform: "scale(100%,50%)" },
          "100%": { transform: "scale(100%,70%)" },
        },
        aniDown2: {
          "0%": { transform: "scale(100%,100%)" },
          "50%": { transform: "scale(100%,30%)" },
          "100%": { transform: "scale(100%,60%)" },
        },
        aniDown3: {
          "0%": { transform: "scale(100%,100%)" },
          "50%": { transform: "scale(100%,80%)" },
          "100%": { transform: "scale(100%,40%)" },
        },
        aniDown4: {
          "0%": { transform: "scale(100%,120%)" },
          "50%": { transform: "scale(100%,40%)" },
          "100%": { transform: "scale(100%,100%)" },
        },
        ImgHover: {
          "100%": { transform: "scale(120%,120%)" },
        },
    },
  },
},
  plugins: [],
};
export default config;
