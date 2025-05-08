# NextJS15-GraphQL-Boilerplate

`Next15 + GraphQL` boilerplate

## How to use

- Framework: [`NextJS15`](https://nextjs.org/)(Using [`App Router`](https://nextjs.org/docs/app))
- Compiler: [`SWC`](https://swc.rs/)
- Styling: [`styled-component`](https://styled-components.com/)
- Testing tool: [`Jest`](https://jestjs.io/) + [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/)
- Code generator: [`PlopJS`](https://plopjs.com/)
- CI / CD: [`Github Actions`](https://github.com/features/actions) + [`Husky`](https://typicode.github.io/husky/)

### Install yarn

```bash
npm i -g yarn
```

### Getting Started

#### Dev

```bash
$ yarn dev
```

#### Storybook

```bash
$ yarn storybook
```

#### Test

```bash
$ yarn test
```

#### Code generator

You can generate code with [`Plopjs`](https://plopjs.com/).

You can decide whether a component will be server-side or client-side, along with test code.

- Api route
- Component (ssr available)
- Pages and layouts (ssr available)

```bash
$ yarn g
```

### CI

#### `Pre commit` by husky

[You can check detail here](./.husky/pre-commit)

#### `Pre push` by husky

[You can check detail here](./.husky/pre-push)

#### `On pull request` by github actions (with cache available)

[You can check detail here](./.github/workflows/pull-request-build-check.yml)

### GraphQL

#### Apollo client with [@apollo/client-integration-nextjs](https://www.npmjs.com/package/@apollo/client-integration-nextjs)

You can see client apollo provider [here](./src/providers/CustomApolloProvider.tsx)

YOu can see server apollo client [here](./src/graphql/apolloServerClient.ts)

#### Graphql upload with [apollo-upload-client](apollo-upload-client)

### Folder Structure

```bash
.
├── .github # GitHub Actions workflows and configurations
├── .husky # Husky configurations for Git hooks
├── .storybook # Storybook configurations and stories
├── generator # Directory for code generation templates and configurations
│   ├── template # Templates used by PlopJS for generating code
│   └── plopfile.mjs # PlopJS configuration file for defining generators
├── public # Static files served directly by the server
├── src
│   ├── app # NextJS App Router configurations and source files
│   │   └── api # API route handlers for server-side functionality
│   ├── assets # Static assets like images, fonts, etc.
│   ├── components # Reusable React components
│   ├── constant # Constants used throughout the application
│   ├── graphql # Graphql related files like apollo client
│   ├── hooks # Custom React hooks
│   ├── libs # Library files and utilities
│   ├── provider # Context providers for global state management
│   ├── stores # State management stores (e.g., Redux, Zustand)
│   ├── styles # Global and component-specific styles
│   ├── types # TypeScript type definitions
│   └── utils # Utility functions and helpers
├── .eslintrc.json # ESLint configuration file for linting JavaScript/TypeScript
├── .example.env # Example environment variables file
├── .gitignore # Specifies files and directories to be ignored by Git
├── .prettierignore # Specifies files and directories to be ignored by Prettier
├── .prettierrc # Prettier configuration file for code formatting
├── .swcrc # SWC configuration file for JavaScript/TypeScript compilation
├── additional.d.ts # Additional TypeScript type definitions
├── jest.config.ts # Jest configuration file for testing
├── jest.setup.ts # Setup file for configuring Jest and testing environment
├── next.config.mjs # Next.js configuration file
├── package.json # Project dependencies and scripts
├── README.md # Project documentation and instructions
├── tsconfig.json # TypeScript configuration file
└── yarn.lock # Lockfile for Yarn dependencies
```

## Todo

- [x] CI (Github actions + Husky)
- [x] Set folder structure
- [x] Jest(with server component)
- [x] Storybook(with server component)
- [x] Generator
- [x] GraphQL
