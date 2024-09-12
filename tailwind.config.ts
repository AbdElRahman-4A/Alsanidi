import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'mainBg': '#f9fafc',
        'primary': '#138AA8',
        'bgBrimary': '#E2EFF4',
        'secondary': '#EB8F3C',
        'grayColor': '#F2F2F2',
        'graySubText': '#979797',
        'lightGrayColor': '#e8e8e8',
        'blackText': '#363636',
        'blackSubText': '#585858',
        'captionColor': '#979797',
        'yellowLightColor': '#EB8F3C1A',
        'pinkLightColor': '#F13A3A26',
        'redColor': '#F13A3A',
        'success': '#62BA7B'
      },
    },
  },
  plugins: [],
};
export default config;
