/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      colors: {
        cyber: {
          500: '#22d3ee',
          600: '#0ea5e9',
          700: '#1d4ed8',
        },
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.12), transparent 45%), radial-gradient(circle at 80% 10%, rgba(99,102,241,0.12), transparent 40%), radial-gradient(circle at 50% 80%, rgba(6,182,212,0.08), transparent 50%)',
      },
      boxShadow: {
        neon: '0 25px 60px rgba(34, 211, 238, 0.15)',
      },
    },
  },
  plugins: [],
};
