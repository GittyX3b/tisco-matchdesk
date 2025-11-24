import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "../backend/dist"), // Ort Ablage build-Files
    emptyOutDir: true, // vorhandenen Build-Ordner leeren vor build?
    rollupOptions: {
      input: {
        // mehrere Subdomains verwenden
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"), // Deklaration shartcuts Projekt-Pfade
    },
  },
});
