module.exports = {
  overrides: [
    {
      files: '**/*.[jt]s?(x)',
      extends: ['plugin:react-hooks/recommended'],
      rules: {
        // Enforce hook dependencies containing all external variables used inside hook
        // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
        'react-hooks/exhaustive-deps': 'error',
      },
    },
  ],
};
