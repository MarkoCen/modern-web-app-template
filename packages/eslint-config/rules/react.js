module.exports = {
  overrides: [
    {
      files: '**/*.[jt]s?(x)',
      extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          pragma: 'React',
          version: 'detect',
        },
      },
      rules: {
        // Enforce missing displayName in a React component
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
        'react/display-name': 'error',

        // Prevent missing props validation in a React component definition
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': 'off',

        // Prevent passing of children as props
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
        'react/no-children-prop': 'error',

        // Disallow .bind() or arrow functions in JSX props
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        'react/jsx-no-bind': 'error',

        // Enforce removing explicit value from boolean jsx props when the value is true
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': 'error',

        // Enforce shorthand jsx properties being listed last
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        'react/jsx-sort-props': [
          'error',
          {
            shorthandLast: true,
            reservedFirst: true,
          },
        ],

        // Enforce removing unnecessary curly braces in props and component children
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        'react/jsx-curly-brace-presence': [
          'error',
          {
            props: 'never',
            children: 'never',
            propElementValues: 'always',
          },
        ],
      },
    },
  ],
};
