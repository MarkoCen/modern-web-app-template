module.exports = {
  root: true,
  extends: ['next/core-web-vitals', '@pkg/eslint-config'],
  settings: {
    next: {
      rootDir: 'apps/web',
    },
  },
  overrides: [
    {
      files: ['locales/*.json'],
      extends: ['plugin:jsonc/recommended-with-json'],
      rules: {
        'jsonc/key-name-casing': [
          'error',
          {
            camelCase: true,
            SCREAMING_SNAKE_CASE: true,
            PascalCase: true,
          },
        ],
      },
    },
  ],
};
