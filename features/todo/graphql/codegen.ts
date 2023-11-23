import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema/*.graphql',
  documents: ['./operations/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './codegen/types.ts': {
      plugins: [
        {
          add: {
            content: ['/* eslint-disable */', '// @ts-nocheck'],
          },
        },
        'typescript',
        'typescript-resolvers',
      ],
      config: {
        enumsAsTypes: true,
        useTypeImports: true,
        strictScalars: true,
        dedupeFragments: true,
        immutableTypes: true,
        contextType: 'GraphQLModules.GlobalContext',
      },
    },
    './codegen/operations.ts': {
      plugins: [
        {
          add: {
            content: ['/* eslint-disable */', '// @ts-nocheck'],
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        strictScalars: true,
        reactQueryVersion: 5,
        fetcher: '@pkg/graphql/react#fetcher',
      },
    },
    './codegen/introspection.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
