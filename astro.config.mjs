// @ts-check

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [react()],
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
		},
	},
});
