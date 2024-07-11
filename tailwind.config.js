/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      "sarabun": ["Sarabun", "sans-serif"]
    },
    fontWeight: {
      'sarabun-regular': 400,
      'sarabun-bold': 700,
    },
    maxHeight: {
      '128': '32rem'
    }
  },
  plugins: [],
}

