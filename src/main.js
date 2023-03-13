const logic = require('./rules/logic.js');
const layout = require('./rules/layout.js');
const pratices = require('./rules/pratices.js');

/** @type {import('eslint'.ESLint.ConfigData)} */
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    ...logic,
    ...pratices,
    ...layout,
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx', '*.vue', '*.svelte'],
      rules: {
        'max-len': 'off',
        'no-extra-parens': 'off',
        'no-nested-ternary': 'off',
      },
    },
  ],
};
