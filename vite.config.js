import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ghost-gaming-frontend/", // ✅ important for GitHub Pages
  server: {
    port: 2000,
  },
  build: {
    outDir: "dist",
  },
});
