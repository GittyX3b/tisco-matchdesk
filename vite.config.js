import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  //base: "/", // set github reponame for deploy
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    cssMinify: true,
    minify: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@provider": path.resolve(__dirname, "./src/data/provider"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@elements": path.resolve(__dirname, "./src/components/elements"),
    },
  },
  server: {
    historyApiFallback: true,
  },
  plugins: [react(), tailwindcss()],
});
