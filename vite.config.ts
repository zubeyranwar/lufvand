import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import {navilo} from "navilo";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        navilo()
    ],
})
