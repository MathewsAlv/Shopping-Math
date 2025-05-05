import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}", // para tu carpeta screens
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          "back-1": "#412E6A",
          button: "#AF32FF",
          headers: "#5E28FF",
          "back-2": "#2680FF",
          "back-3": "#E526FF",
          parag: "#2B3CFF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
