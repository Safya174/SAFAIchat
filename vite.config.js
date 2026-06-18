import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/SAFAIchat/", // 🔥 لازم اسم المشروع بين 2 سلاش وبنفس الحروف بالظبط كدا!
});
