module.exports = {
  'array-bracket-newline': ['off'],
  'array-bracket-spacing': ['error', 'never'],
  'array-element-newline': 'off',
  'arrow-parens': 'error',
  'arrow-spacing': 'error',
  'block-spacing': 'error',
  'brace-style': 'error',
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': ['error', {
    'before': false,
    'after': true,
  }],
  'comma-style': ['error', 'last', {
    'exceptions': {
      'ArrayExpression': false,
      'ArrayPattern': false,
      'ArrowFunctionExpression': false,
      'CallExpression': false,
      'FunctionDeclaration': false,
      'FunctionExpression': false,
      'ImportDeclaration': false,
      'ObjectExpression': false,
      'ObjectPattern': false,
      'VariableDeclaration': false,
      'NewExpression': false,
    },
  }],
  'computed-property-spacing': ['error', 'never', {
    'enforceForClassMembers': true,
  }],
  'dot-location': ['error', 'property'],
  'eol-last': 'error',
  'func-call-spacing': 'error',
  'function-call-argument-newline': ['error', 'consistent'],
  'function-paren-newline': ['error', 'multiline-arguments'],
  'generator-star-spacing': ['error', {
    'after': true,
    'before': false,
  }],
  'implicit-arrow-linebreak': ['error', 'beside'],
  'indent': ['error', 2],
  'jsx-quotes': ['error', 'prefer-double'],
  'key-spacing': ['error', {
    'beforeColon': false,
    'afterColon': true,
  }],
  'keyword-spacing': ['error', {
    'before': true,
    'after': true,
  }],
  'line-comment-position': 'off',
  'linebreak-style': ['error', 'unix'],
  'lines-around-comment': 'off',
  'lines-between-class-members': 'error',
  'max-len': ['error', {
    'code': 120,
    'tabWidth': 2,
  }],
  'max-statements-per-line': 'off',
  'multiline-ternary': 'off',
  'new-parens': 'error',
  'newline-per-chained-call': ['error', {
    'ignoreChainWithDepth': 4,
  }],
  'no-extra-parens': ['error', 'all', {
    'enforceForFunctionPrototypeMethods': false,
    'enforceForNewInMemberExpressions': false,
  }],
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-spaces': ['error', {
    'ignoreEOLComments': false,
  }],
  'no-multiple-empty-lines': ['error', {
    'max': 1,
  }],
  'no-tabs': 'error',
  'no-trailing-spaces': 'error',
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': ['error', 'beside'],
  /* 'object-curly-newline', 'object-property-newline' */
  'object-curly-spacing': 'error',
  'operator-linebreak': ['error', 'none'],
  'padded-blocks': ['error', 'never'],
  'padding-line-between-statements': 'off',
  'quotes': ['error', 'single'],
  'rest-spread-spacing': ['error', 'never'],
  'semi': 'error',
  'semi-spacing': 'error',
  'semi-style': ['error', 'last'],
  'space-before-blocks': 'error',
  'space-before-function-paren': ['error', 'never'],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': 'error',
  'space-unary-ops': ['error', {
    'words': true,
    'nonwords': false,
  }],
  'switch-colon-spacing': 'error',
  'template-tag-spacing': ['error', 'never'],
  'template-curly-spacing': 'off',
  'unicode-bom': ['error', 'never'],
  'wrap-iife': ['error', 'outside', {
    'functionPrototypeMethods': false,
  }],
  'wrap-regex': 'off',
  'yield-star-spacing': ['error', 'after'],
};
