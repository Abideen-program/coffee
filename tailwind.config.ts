import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "hsla(0, 0%, 100%, 0.4)",
        glassBorder: "1px solid hsla(0, 0%, 100%, 0.2)",
        glassHover: "hsla(0, 0%, 100%, 0.7)",
        borderHover: "1px solid #fff",
      },
    },
  },
  plugins: [],
};
export default config;
