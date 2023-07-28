/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#35373D',
        'dark-blue': '#1B4E7A',
        'soft-yellow': '#F1AD28',
        'soft-orange': '#ED553B',
        'light-gray': '#E3E6EB',
        'light-gray-2': '#F8FAFD',
        'light-gray-3': '#5A5A5A',
        'light-blue': '#00A1E8',
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
