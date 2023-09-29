import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "cyberpunk",
      "corporate",
      "aqua",
      "cupcake",
      "bumblebee",
      "emerald",
      "fantasy",
      "winter",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} satisfies Config;
