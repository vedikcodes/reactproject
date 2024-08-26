import { defineConfig } from 'vite'
import tailwind from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
   css:{
    postcss:[tailwind]
   }
})
