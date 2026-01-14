import nextVitals from 'eslint-config-next/core-web-vitals';

import prettier from 'eslint-plugin-prettier';

const config = [
  ...nextVitals,
  {
    plugins: {
      prettier,
    },
  },
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'node_modules/**', 'storybook-static/**'],
  },
];

export default config;
