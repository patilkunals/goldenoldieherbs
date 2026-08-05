/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E3A2B',
        primaryDark: '#11261D',
        gold: '#D4AF37',
        goldMuted: '#C5A059',
        sand: '#FBF9F5',
        parchment: '#F4EFE6',
        charcoal: '#1F2421',
        terracotta: '#B85B35',
      },
      fontFamily: {
        heading: ["Playfair Display", 'serif'],
        sans: ["Plus Jakarta Sans", 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft-gold': '0 6px 18px rgba(212,175,55,0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
