/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#001F54",
      secondary: "#477CCF",
      inputs: "#C6C6C6",
      disableInput: "#CDCDCD",
      whiteBG: "#666464",
      backgroundcolor: "#FFFFFF",
      inputBorder: "#838383",
<<<<<<< HEAD
      inputText: '#454545',
      cardBG: '#FBFBFB',
      blackColor: '#333333'
=======
      inputText: "#454545",
      cardBG: "#FBFBFB",
      error: "#cc0000",
>>>>>>> f76271539d1db25cd41aea66a473394da32787e0
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
