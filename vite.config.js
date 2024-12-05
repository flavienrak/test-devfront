import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue"; // Import du plugin Vue

import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/scss/app.scss", "resources/js/app.js"],
            refresh: true,
        }),
        vue(),
    ],
    server: {
        host: process.env.VITE_SERVER_IP || "127.0.0.1",
        port: 5173,
        origin: "http://0.0.0.0:5173",
        cors: true,
    },
});
