const tailwindConfig = {
  darkMode: 'media',
  content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'orders-table-cols':
          ' minmax(100px, 1fr) minmax(100px, 3fr) minmax(100px, 2fr) minmax(100px, 1.4fr) minmax(100px, 1fr) minmax(100px, 2fr) minmax(100px, 1fr) minmax(100px, 1.33fr)',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
