import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/route-tracker/",
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My PWA App",
        short_name: "PWA App",
        description: "A Progressive Web App built with Vite and TypeScript",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
