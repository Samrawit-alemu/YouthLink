/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563eb', // blue-600
                    hover: '#1d4ed8',   // blue-700
                    light: '#60a5fa',   // blue-400
                },
                secondary: {
                    DEFAULT: '#14b8a6', // teal-500
                },
                accent: {
                    DEFAULT: '#f59e0b', // amber-500
                },
                dark: {
                    DEFAULT: '#0f172a', // slate-900
                    lighter: '#1e293b', // slate-800
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
