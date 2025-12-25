// @ts-check

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [react(), playformCompress()],
    env: {
        schema: {
            APP_URL: envField.string({
                access: "public",
                context: "client",
            }),
            POSTHOG_PROJECT_ID: envField.string({
                access: "public",
                context: "client",
            }),
            NODE_ENV: envField.string({
                access: "public",
                context: "client",
            }),
        },
    },
    i18n: {
        locales: ["en", "uz", "ru"],
        defaultLocale: "en",
    },
});