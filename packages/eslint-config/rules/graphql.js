module.exports = {
  overrides: [
    {
      files: ['*.graphql'],
      extends: [
        'plugin:@graphql-eslint/schema-recommended',
        'plugin:@graphql-eslint/operations-recommended',
      ],
    },
  ],
};
