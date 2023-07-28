/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#35373D',
        'soft-yellow': '#F1AD28',
        'soft-orange': '#ED553B',
        'light-gray': '#E3E6EB',
        'light-gray-2': '#F8FAFD',
        'light-blue': '#00A1E8',
      },
    },
  },
  plugins: [],
}
