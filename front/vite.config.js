import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//開発環境でのみ使われる

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
});
