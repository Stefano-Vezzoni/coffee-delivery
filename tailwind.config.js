/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'home-background-image': "url('src/assets/coffee-home-background.png')",
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                poetsen: ['Poetsen One', 'sans-serif']
            },
        },
    },
    plugins: [],
}

