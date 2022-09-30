/// <reference types="vitest" />
import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import path from "path";
import analyze from "rollup-plugin-analyzer";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

const TEST_THRESHOLD = 60;

export default defineConfig(({ mode }) => ({
  build: {
    outDir: "build",
    rollupOptions: {
      plugins: [analyze({ summaryOnly: true })],
    },
    sourcemap: mode !== "production",
    minify: "terser",
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
  css: {
    modules: {
      localsConvention: "dashesOnly",
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/global.scss";',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    include: ["src/**/*.spec.ts", "src/**/*.spec.tsx"],
    globals: true,
    environment: "jsdom",
    setupFiles: "src/testUtils/setupTests.ts",
    clearMocks: true,
    coverage: {
      clean: true,
      enabled: true,
      exclude: [
        "src/services/constants",
        "src/styles",
        "src/testUtils",
        "src/**/*.spec.{ts,tsx}",
      ],
      reporter: ["lcov"],
      reportsDirectory: "coverage",
      // Thresholds for coverage results
      lines: TEST_THRESHOLD,
      functions: TEST_THRESHOLD,
      branches: TEST_THRESHOLD,
      statements: TEST_THRESHOLD,
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    ...(mode !== "test"
      ? [
          eslintPlugin(),
          VitePWA({
            registerType: "autoUpdate",
            includeAssets: [
              "favicon.png",
              "robots.txt",
              "apple-touch-icon.png",
              "icons/*.svg",
              "fonts/*.woff2",
            ],
            manifest: {
              theme_color: "#BD34FE",
              icons: [
                {
                  src: "/android-chrome-192x192.png",
                  sizes: "192x192",
                  type: "image/png",
                  purpose: "any maskable",
                },
                {
                  src: "/android-chrome-512x512.png",
                  sizes: "512x512",
                  type: "image/png",
                },
              ],
            },
          }),
        ]
      : []),
  ],
}));
