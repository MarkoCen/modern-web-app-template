module.exports = {
  overrides: [
    {
      files: '**/*.[jt]s?(x)',
      env: {
        es6: true,
      },
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
      extends: ['plugin:import/recommended', 'plugin:import/typescript'],
      parser: '@typescript-eslint/parser',
      rules: {
        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/extensions': 'error',

        // disallow duplicate imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'import/no-duplicates': 'error',

        // Forbid cyclical dependencies between modules
        // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
        'import/no-cycle': ['error', { maxDepth: 1 }],

        // ensure absolute imports are above relative imports and that unassigned imports are ignored
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'unknown',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            pathGroups: [
              {
                pattern: 'react*',
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'nest*',
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'next*',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin', 'react', 'nest', 'next'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
            },
          },
        ],
        'sort-imports': [
          'error',
          {
            ignoreDeclarationSort: true, // import/order will take care of it
          },
        ],

        // ensure no dev dependency imports in production code
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/*.test.{ts,tsx,js,jsx}',
              '**/*.spec.{ts,tsx,js,jsx}',
              '**/*.stories.{ts,tsx,js,jsx}',
              '*.config.{ts,js}',
              'jest.*.{ts,js}',
            ],
          },
        ],
      },
    },
  ],
};
