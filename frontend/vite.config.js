import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    allowedHosts: ["hypogastric-reinaldo-submissively.ngrok-free.dev"],
    port: 5173,
    proxy: { "/api": "https://zyra-32ze.onrender.com" },
  },
});
