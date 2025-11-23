import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

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
