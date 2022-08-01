# PONTI UI

[![github test](https://github.com/charlesponti/corona/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/charlesponti/corona/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/charlesponti/corona/branch/main/graph/badge.svg?token=365VCE2C4N)](https://codecov.io/gh/charlesponti/corona)
[![cypress](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ssvz5r&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ssvz5r/runs)  
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/wtchnm/Vitamin/blob/main/LICENSE)

the boilerplate for Ponti & Co web apps

## Features

- [Vite](https://vitejs.dev) with [React](https://reactjs.org), [TypeScript](https://www.typescriptlang.org) and [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).
- [ESLint](https://eslint.org) and [stylelint](https://stylelint.io) on VSCode and before you commit with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).
- [PWA](https://github.com/antfu/vite-plugin-pwa) with [17/17 Lighthouse score](https://web.dev/pwa-checklist/).
- unit and integration tests with [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).
- e2e tests with [Cypress](https://www.cypress.io).
- GitHub Actions for automatic [dependency updates](https://renovatebot.com/), [CodeQL Analysis](https://securitylab.github.com/tools/codeql), running tests and code coverage with [Codecov](https://about.codecov.io/).
- Deploy to [Vercel](vercel.com) with pre-configured [SPA fallback](https://vercel.com/docs/configuration#routes/advanced/spa-fallback).

## Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `build` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm test:e2e` - run all e2e tests with the Cypress Test Runner.
- `pnpm test:e2e:headless` - run all e2e tests headlessly.
- `pnpm format` - format all files with ESLint.
- `pnpm lint` - runs TypeScript, ESLint and Stylelint.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.
