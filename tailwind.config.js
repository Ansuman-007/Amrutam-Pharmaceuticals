module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        orange: { 50: "#fff7e2" },
        green: {
          50: "#eaf2ea",
          "800_01": "#3a643b",
          "100_7f": "#cfebcf7f",
          "800_63": "#3a643b63",
          "800_84": "#3a643b84",
        },
        white: { A700_01: "#ffffff" },
        gray: {
          50: "#f9f9f9",
          100: "#f1faf1",
          200: "#ededed",
          300: "#dfdfdf",
          500: "#979797",
          700: "#646464",
          800: "#4f4f4f",
          900: "#131313",
          "800_02": "#464646",
          "700_03": "#575757",
          "100_01": "#f3f3f3",
          "300_02": "#dceedc",
          "300_01": "#e2e2e2",
          "600_03": "#757575",
          "600_01": "#7b7b7b",
          "700_02": "#646665",
          "800_01": "#3c3c3c",
          "200_01": "#e7e7e7",
          "300_06": "#dbdbdb",
          "300_05": "#e5e5e5",
          "100_02": "#f2fbf2",
          "50_02": "#f7f7fc",
          "900_02": "#1e1e1e",
          "700_04": "#606060",
          "300_03": "#e0e0e0",
          "600_02": "#797979",
          "200_02": "#eaeaea",
          "50_05": "#fffcf2",
          "900_03": "#212529",
          "700_05": "#626262",
          "500_01": "#929292",
          "600_05": "#818181",
        },
        black: { 900: "#0d0d0d", "900_02": "#000000" },
        blue_gray: {
          100: "#d8d8d8",
          400: "#8d8d8d",
          800: "#333548",
          900: "#303030",
          "100_02": "#d4d4d4",
          "100_01": "#cdcdcd",
          "900_02": "#2e2f2e",
          "100_03": "#d0d5d0",
          "800_7f": "#3335487f",
          "900_03": "#2b2b2b",
          "400_01": "#8a8a8a",
          "800_b5": "#333548b5",
          "900_01": "#2e2e2e",
        },
        yellow: { 50: "#fffbf1", 700: "#f0b83a", 800: "#f79624" },
        indigo: { "700_0a": "#2e37a40a" },
        deep_orange: { 700: "#d5512e" },
      },
      boxShadow: { xs: "0px 4px 12px 0px #00000011" },
      fontFamily: {
        nunito: "Nunito",
        dinpro: "DINPro",
        dinprobold: "DINPro-Bold",
        inter: "Inter",
        gothamrounded: "Gotham Rounded",
        poppins: "Poppins",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #0b0b0b,#0b0b0bc9)",
        gradient1: "linear-gradient(274deg, #fbfcfb,#f4f7ec)",
        gradient2: "linear-gradient(90deg, #f4f7ec,#f8f8f775)",
        gradient3: "linear-gradient(90deg, #f4f7ec,#f4f7ec,#fdfdfd)",
        gradient4: "linear-gradient(90deg, #f4f7ec,#fcfcfc)",
        gradient5: "linear-gradient(90deg, #f4f7ec,#fbfbfb)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
