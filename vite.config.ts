import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  // 🔥 Fix lỗi refresh bị 404 trên Vercel
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
