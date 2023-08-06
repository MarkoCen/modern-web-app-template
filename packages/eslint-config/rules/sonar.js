module.exports = {
  overrides: [
    {
      files: '**/*.[jt]s?(x)',
      extends: ['plugin:sonarjs/recommended'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
