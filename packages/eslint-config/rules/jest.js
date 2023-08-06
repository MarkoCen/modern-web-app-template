module.exports = {
  overrides: [
    {
      files: '**/?(*.)+(spec|test).[jt]s?(x)',
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-formatting/recommended',
        'plugin:testing-library/react',
      ],
      env: {
        'jest/globals': true,
      },
      rules: {
        // Ensure that there is at least one expect() call made in a test.
        // This rule is included by default in the recommended set, but we need to configure it to consider expectTypeOf().
        // https://github.com/mmkal/expect-type#jest--eslint-plugin-jest
        'jest/expect-expect': [
          'warn',
          {
            assertFunctionNames: ['expect', 'expectTypeOf'],
          },
        ],

        // Prefer using userEvent over fireEvent for simulating user interactions
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
        'testing-library/prefer-user-event': 'error',
      },
    },
  ],
};
