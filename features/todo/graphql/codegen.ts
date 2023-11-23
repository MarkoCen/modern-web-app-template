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
            content: '/* eslint-disable */',
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
            content: '/* eslint-disable */',
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        reactQueryVersion: 5,
      },
    },
    './codegen/introspection.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
