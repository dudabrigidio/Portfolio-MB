import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-gray": "var(--custom-gray)",
        "custom-dark": "var(--custom-dark)",
        "custom-beige": "var(--custom-beige)",
        "custom-brown": "var(--custom-brown)",
        "custom-light": "var(--custom-light)",
      },
      fontFamily: {
        'questrial': ['questrial', 'sans-serif'], 
        'open-sans': ['open-sans', 'sans-serif'], 
      },
      screens: {
        sm: {'max': '640px'},   // Até 640px para sm
        md: {'max': '769px'},   // Até 768px para md
        lg: {'max': '1025px'},  // Até 1024px para lg
        xl: {'max': '1280px'},  // Até 1280px para xl
      },
      
      
    },
  },
  plugins: [],
} satisfies Config;
