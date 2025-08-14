import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: process.env.NODE_ENV === "production" ? "/ghost-gaming-frontend" : "/", //for github-pages
  base: "/",
  server: {
    port: 2000,
  },
  build: {
    outDir: "dist",
  },
});
