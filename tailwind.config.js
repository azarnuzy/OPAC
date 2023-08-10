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
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Poppins', 'sans-serif'],
      mono: ['"Source Code Pro"', 'monospace'],
    },
  },
  plugins: [],
}
