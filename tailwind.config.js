/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "grey" : "#676767",
        "dark" : "#323232",
        "dark-soft" : "#32323242",
        "sky-blue" : "#5B78F6"
       }
    },
    container: {
			center: true,
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1200px",
		},
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}
