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
    environment: "happy-dom",
    setupFiles: ["./tests/setup.ts"],
    pool: "threads",
    isolate: false,
    css: false,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./app"),
      "#imports": resolve(__dirname, "./tests/mocks/imports.ts"),
    },
  },
});
