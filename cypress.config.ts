import { defineConfig } from 'cypress';
import pluginConfig from './cypress/plugins';

export default defineConfig({
  fileServerFolder: 'build',
  fixturesFolder: false,
  projectId: 'ssvz5r',

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return pluginConfig(on, config) as Cypress.PluginConfigOptions;
    },
    baseUrl: 'http://localhost:4173/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
