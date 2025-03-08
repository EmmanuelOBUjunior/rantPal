 import type {Config} from "tailwindcss";
const config:Config = {
    darkMode : ["class"],
    content :[
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme :{
        extend: {
            colors: {
                primary: {
                    light: '#9333ea', // purple-600
                    dark: '#a855f7', // purple-500
                },
                secondary: {
                    light: '#4b5563', // gray-600
                    dark: '#1f2937', // gray-800
                },
                background: {
                    light: '#f9fafb', // gray-50
                    dark: '#111827', // gray-900
                },
            },
        },
    },
    plugins :[],
}
export default config;