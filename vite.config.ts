import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/route-tracker/",
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Route tracker",
        short_name: "Route tracker",
        description: "track your walks without having to install anything",
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
