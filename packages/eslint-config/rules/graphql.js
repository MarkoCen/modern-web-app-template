module.exports = {
  overrides: [
    {
      files: ['schema/*.graphql'],
      extends: ['plugin:@graphql-eslint/schema-recommended'],
      rules: {
        '@graphql-eslint/require-description': 'off',
      },
    },
    {
      files: ['operations/*.graphql'],
      extends: ['plugin:@graphql-eslint/operations-recommended'],
      rules: {
        '@graphql-eslint/require-description': 'off',
      },
    },
  ],
};
