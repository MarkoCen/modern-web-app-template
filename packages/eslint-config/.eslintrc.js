module.exports = {
  root: true,
  extends: ['@pkg/eslint-config'],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
};
