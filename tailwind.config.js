/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: {
        DEFAULT: "var(--primary6)",
        2: "var(--primary2)",
        1: "var(--primary1)",
        3: "var(--primary3)",
        4: "var(--primary4)",
        5: "var(--primary5)",
        6: "var(--primary6)",
        7: "var(--primary7)",
        8: "var(--primary8)",
        9: "var(--primary9)",
        10: "var(--primary10)",
        11: "var(--primary11)",
        12: "var(--primary12)",
      },
    }
  },
  plugins: [],
}
