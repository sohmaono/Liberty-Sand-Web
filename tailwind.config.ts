import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        textcolor: "var(--textcolor)",
        "primitive-grey-2": "var(--primitive-grey-2)",
        "token-header-backgound": "var(--token-header-backgound)",
        "token-header-text-duplicate": "var(--token-header-text-duplicate)",
        "tokens-body-background": "var(--tokens-body-background)",
        "tokens-form-background": "var(--tokens-form-background)",
        "tokens-form-hinttext": "var(--tokens-form-hinttext)",
        "tokens-header-ordericon": "var(--tokens-header-ordericon)",
        "tokens-sidemenu-backgound": "var(--tokens-sidemenu-backgound)",
        "tokens-sidemenu-barrier": "var(--tokens-sidemenu-barrier)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
