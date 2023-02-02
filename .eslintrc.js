module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
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
  },
};
