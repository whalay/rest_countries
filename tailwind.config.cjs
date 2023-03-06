/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'Dark-Blue': 'hsl(209, 23%, 22%)', //(Dark Mode Elements)
                'Dark-Mode': 'hsl(207, 26%, 17%)', //(Dark Mode Background)
                'Very-Dark-Blue': 'hsl(200, 15%, 8%)', //(Light Mode Text)
                'Dark-Gray': 'hsl(0, 0%, 52%)', //(Light Mode Input)
                'Light-Mode': 'hsl(0, 0%, 98%)', //(Light Mode Background)
                'White': 'hsl(0, 0%, 100%)', //(Dark Mode Text & Light Mode Elements)
            }
        }
    },
    plugins: [],
}