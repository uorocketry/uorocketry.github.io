module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // In case you want to use a custom theme:
  // https://daisyui.com/theme-generator/
  // daisyui: {
  //   themes: [
  //     {
  //       default: {
  //         primary: "#F2C879",
  //         secondary: "#F2E0C9",
  //         accent: "#F2B680",
  //         neutral: "#A64B17",
  //         "base-100": "#401F0C",
  //         info: "#1741E8",
  //         success: "#21B056",
  //         warning: "#F9A23E",
  //         error: "#F7505B",
  //       },
  //     },
  //   ],
  // },
};
