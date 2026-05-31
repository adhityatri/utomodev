import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: false,
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./app"),
      "#imports": resolve(__dirname, "./tests/mocks/imports.ts"),
    },
  },
});
