# PONTI UI

[![github test](https://github.com/theponti/ponti-ui/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/theponti/ponti-ui/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/theponti/ponti-ui/branch/main/graph/badge.svg?token=365VCE2C4N)](https://codecov.io/gh/theponti/ponti-ui)
[![cypress](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ssvz5r&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ssvz5r/runs)  
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/wtchnm/Vitamin/blob/main/LICENSE)

the boilerplate for Ponti Studios web apps

## Features

- **_Language:_** [TypeScript](https://www.typescriptlang.org)
- **_Framework:_** [React](https://reactjs.org)
- **_Build:_** [Vite](https://vitejs.dev)
  - [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).
  - [PWA](https://github.com/antfu/vite-plugin-pwa) with [17/17 Lighthouse score](https://web.dev/pwa-checklist/).
- [ESLint](https://eslint.org) and [stylelint](https://stylelint.io) on VSCode and before you commit with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).
- **_Testing:_**
  - _Unit:_ [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).
  - _E2E:_ [Cypress](https://www.cypress.io).
- **_Continuous Integration_**
  - GitHub Actions
  - _Code quality:_ [CodeQL Analysis](https://securitylab.github.com/tools/codeql)
  - _Code coverage:_ [Codecov](https://about.codecov.io/).
- **_Deployment:_**
  - _Hosting:_ [Vercel](vercel.com)
  - _Database:_ [Supabase](supabase.com)

## Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `build` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm test:e2e` - run all e2e tests with the Cypress Test Runner.
- `pnpm test:e2e:headless` - run all e2e tests headlessly.
- `pnpm run-eslint` - Fix all files with ESLint.
- `pnpm lint` - Runs TypeScript, ESLint and Stylelint.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.
