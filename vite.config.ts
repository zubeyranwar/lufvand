import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {preluderPlugin} from "preluder";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      preluderPlugin()
  ],
})
