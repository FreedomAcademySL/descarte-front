module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-unnecessary-type-constraint': ['off'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowTypedFunctionExpressions: true,
      },
    ],
    'react/display-name': 'off',
    'no-debugger': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': ['error'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/no-empty-interface': ['off'],
    'sonarjs/cognitive-complexity': ['error', 25],
  },
};
