/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-background": 'url("/background.avif")',
        // If image is inside public/images -> "url('/images/login-background.jpg')"
      },
      height: {
        'large-box': '400px',
      },
    },
  },
  plugins: [],
};
