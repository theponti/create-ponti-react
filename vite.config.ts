/// <reference types="vitest" />
import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

enum TestOptions {
  TEST_THRESHOLD = 60,
}

const TEST_THRESHOLD = Number(process.env.TEST_THRESHOLD) || TestOptions.TEST_THRESHOLD;

export default defineConfig(({ mode }) => ({
  build: {
    outDir: 'build',
  },
  test: {
    include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    clearMocks: true,
    coverage: {
      enabled: true,
      exclude: ['src/setupTests.ts', 'src/testUtils.tsx'],
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage/jest',

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
    ...(mode !== 'test'
      ? [
        eslintPlugin(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: [
            'favicon.png',
            'robots.txt',
            'apple-touch-icon.png',
            'icons/*.svg',
            'fonts/*.woff2',
          ],
          manifest: {
            theme_color: '#BD34FE',
            icons: [
              {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any maskable',
              },
              {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
              },
            ],
          },
        }),
      ]
      : []),
  ],
}));
