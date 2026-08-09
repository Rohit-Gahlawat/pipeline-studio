module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6900',
          hover: '#f54900',
        },
        success: '#00a63e',
        warning: '#f59e0b',
        danger: '#e7000b',
        info: '#2b7fff',
        llm: '#7f22fe',
        canvas: '#171717',
        surface: '#262626',
        card: '#2b2b2b',
        field: '#1f1f1f',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
