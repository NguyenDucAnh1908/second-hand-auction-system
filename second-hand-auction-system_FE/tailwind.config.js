/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  content: [
    "./index.html", // Đảm bảo đường dẫn đến tệp HTML của template
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}", // Đường dẫn đến các tệp JSX trong dự án
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        // Kết hợp các màu từ dự án cũ
        123329: "var(--123329)",
        red: { 700: "var(--red_700)", a700: "var(--red_a700)" },
        gray: {
          100: "var(--gray_100)",
          200: "var(--gray_200)",
          900: "var(--gray_900)",
          "900_02": "var(--gray_900_02)",
          "100_01": "var(--gray_100_01)",
          "100_02": "var(--gray_100_02)",
          "900_01": "var(--gray_900_01)",
          "900_99": "var(--gray_900_99)",
          "900_cc": "var(--gray_900_cc)",
        },
        "19b269": { 0: "var(--19b269_0)", 1: "var(--19b269_1)", 2: "var(--19b269_2)" },
        bg: { 1: "var(--bg_1)", 2: "var(--bg_2)", 4: "var(--bg_4)", white: "var(--bg_white)" },
        color: {
          border: "var(--color_border)",
          text_dark: "var(--color_text_dark)",
          text_light: "var(--color_text_light)",
        },
        f1fff2: "var(--f1fff2)",
        text: { head: "var(--text_head)" },
        blue: { 700: "var(--blue_700)", a700: "var(--blue_a700)" },
        indigo: {
          100: "var(--indigo_100)",
          400: "var(--indigo_400)",
          900: "var(--indigo_900)",
          "900_01": "var(--indigo_900_01)",
          "900_02": "var(--indigo_900_02)",
          "100_01": "var(--indigo_100_01)",
        },
        light_blue: { 800: "var(--light_blue_800)" },
        orange: { 300: "var(--orange_300)", a700: "var(--orange_a700)", "300_26": "var(--orange_300_26)" },
        yellow: { 800: "var(--yellow_800)", 900: "var(--yellow_900)" },
        black: { 900: "var(--black_900)" },
        blue_gray: {
          600: "var(--blue_gray_600)",
          900: "var(--blue_gray_900)",
          "600_01": "var(--blue_gray_600_01)",
          "900_01": "var(--blue_gray_900_01)",
          "900_02": "var(--blue_gray_900_02)",
          "900_0c": "var(--blue_gray_900_0c)",
          "900_19": "var(--blue_gray_900_19)",
        },
        deep_purple: { 800: "var(--deep_purple_800)" },
        green: {
          50: "var(--green_50)",
          400: "var(--green_400)",
          700: "var(--green_700)",
          a700: "var(--green_a700)",
          a700_11: "var(--green_a700_11)",
          a700_19: "var(--green_a700_19)",
        },
        light_green: { "900_99": "var(--light_green_900_99)" },
        white: { a700_4c: "var(--white_a700_4c)" },
      },
      boxShadow: {
        xs: "0 10px 35px 0 #11213719",
        sm: "0 10px 50px 0 #041e420c",
        md: "0 5px 20px 0 #f5c34b26",
        lg: "0 10px 20px 0 #041e420c",
      },
      fontFamily: { jost: "Jost", bevietnampro: "Be Vietnam Pro" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
});
