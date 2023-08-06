module.exports = {
  overrides: [
    {
      files: '**/*.[jt]s?(x)',
      extends: ['eslint:recommended'],
      env: {
        node: true,
        browser: true,
        es2021: true,
      },
      rules: {},
    },
  ],
};
