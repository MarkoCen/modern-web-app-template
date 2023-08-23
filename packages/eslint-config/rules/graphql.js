module.exports = {
  overrides: [
    {
      files: ['*.graphql'],
      extends: ['plugin:@graphql-eslint/schema-recommended'],
      rules: {
        '@graphql-eslint/require-description': 'off',
      },
    },
  ],
};
