<p align="center">
<img src="https://repository-images.githubusercontent.com/446977257/2937768f-1569-45a6-ac60-a7b44a78225b" alt="vite-fastify-boilerplate"/>
</p>

[![Coverage Status](https://coveralls.io/repos/github/ManUtopiK/vite-fastify-boilerplate/badge.svg?branch=main)](https://coveralls.io/github/ManUtopiK/vite-fastify-boilerplate?branch=main)
[![Sync Vulnerabilities Status](https://app.snyk.io/test/github/ManUtopiK/vite-fastify-boilerplate/badge.svg)](https://snyk.io/test/github/ManUtopiK/vite-fastify-boilerplate)

Enhance your [Fastify](https://github.com/fastify/fastify) DX with the power of [Vite](https://vitejs.dev) & [Vitest](https://vitest.dev/).

## Features

- ⚡ All the power of Vite (Next Generation ~~Frontend~~ Isomorphic Tooling):
  - Lightning fast HMR (hot module replacement) in dev mode with [Vite Plugin Node](https://github.com/axe-me/vite-plugin-node#readme).
  - Smart & instant watch mode, like HMR for tests with [Vitest](https://vitest.dev/).
- 🛠️  DX setup:
  - Vite, Prettier and Typescript with common config, esnext ready and alias `@/*`
  - Tests with one Fastify instance setup, code coverage
  - Fastify with logger
  - Production build without Vite

So, it's super fast donc ça va super vite 🚀

## Why and How

See [Why and How Vite in node](https://github.com/axe-me/vite-plugin-node#why) and [Why Vitest](https://vitest.dev/guide/why.html).

## Get started

1. Clone this repo or use [tiged](https://github.com/tiged/tiged) with:

```bash
degit https://github.com/ManUtopiK/vite-fastify-boilerplate
```

2. Install:

```bash
pnpm install
```

**Start dev mode using Vite:**

```bash
pnpm dev
```

**Start test mode using Vitest:**

```bash
pnpm test
```

**Start test mode with coverage:**

```bash
pnpm coverage
```

**Compile typescript to javascript:**

```bash
pnpm build
```

**Start for production:**

```bash
pnpm start
```

## Code

- Main file: `src/app.ts`
- Configure logger: `src/logger.ts`
- Change port in `.env`

### Docs

- [Vite](https://vitejs.dev/)
- [Vite Plugin Node](https://github.com/axe-me/vite-plugin-node)
- [Vitest](https://vitest.dev/)
- [Fastify](https://www.fastify.io/docs/latest/)

### Ressources

- [Awesome vite](https://github.com/vitejs/awesome-vite)
- [Fastify ecosystem](https://www.fastify.io/ecosystem/)

### Add vite plugin example

#### Import `.gql` and `.graphql` files

1. **Install packages:**

   ```bash
   pnpm add graphql graphql-tag
   pnpm add -D vite-plugin-simple-gql
   ```

2. **Configure `vite.config.ts`:**

   ```js
   import gql from 'vite-plugin-simple-gql'
   ```

   And add `gql()` to `plugins`:

   ```js
   plugins: [gql(), ...]
   ```

Now you can import your graphql files in your code:

```js
// example.ts
import MyQuery from './MyQuery.gql'
```

## Contributions

If you would like to make any contribution you are welcome to do so.

## Bugs

Please create an issue if you found any bugs, to help me improve this project!
