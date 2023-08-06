module.exports = {
  overrides: [
    {
      files: '**/?(*.)+(stories).[jt]s?(x)',
      extends: ['plugin:storybook/recommended'],
      rules: {
        // Disallow .bind() or arrow functions in JSX props
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        'react/jsx-no-bind': 'off',
      },
    },
  ],
};
