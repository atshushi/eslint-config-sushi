const logic = require('./rules/logic.js');
const layout = require('./rules/layout.js');
const pratices = require('./rules/pratices.js');

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
};
