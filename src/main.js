const logic = require('./rules/logic.js');
const layout = require('./rules/layout.js');
const pratices = require('./rules/pratices.js');

module.exports = {
  parserOptions: {
    ecmaVersion: new Date().getUTCFullYear(),
  },
  rules: {
    ...logic,
    ...pratices,
    ...layout,
  },
};
