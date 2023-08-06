module.exports = {
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: '*.json5',
      extends: ['plugin:jsonc/recommended-with-json5'],
      rules: {},
    },
    {
      files: ['*.jsonc', 'turbo.json', 'tsconfig?([-.]*).json'],
      extends: ['plugin:jsonc/recommended-with-jsonc'],
      rules: {},
    },
    {
      files: '*.json',
      extends: ['plugin:jsonc/recommended-with-json'],
      excludedFiles: ['turbo.json', 'tsconfig?([-.]*).json'],
      rules: {
        'jsonc/key-name-casing': [
          'error',
          {
            camelCase: true,
            SCREAMING_SNAKE_CASE: true,
          },
        ],
      },
    },
    {
      files: 'package.json',
      rules: {
        'jsonc/key-name-casing': 'off',
      },
    },
  ],
};
