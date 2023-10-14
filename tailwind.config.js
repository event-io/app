/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      primary: '#3F51B5',      // Indigo Blue
      secondary: '#009688',    // Teal
      accent: '#FF5722',       // Orange
      background: '#F5F5F5',   // Light Gray
      white: '#FFFFFF',        // White
      success: '#2fd033',      // Green
      text: '#333333',         // Dark Gray
      highlight: '#FFC107',    // Yellow
    },
    fontFamily: {
      header: ['Lilita One', 'sans-serif'],
      body: ['Poppins'],
    }
  },
  plugins: [],
}

