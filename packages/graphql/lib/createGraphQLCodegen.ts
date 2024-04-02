import type { CodegenConfig } from '@graphql-codegen/cli';

const addPlugin = {
  add: {
    content: ['/* eslint-disable */', '// @ts-nocheck'],
  },
};

interface Options {
  schema?: CodegenConfig['schema'];
  documents?: CodegenConfig['documents'];
}

export const createGraphQLCodegen = ({
  schema = './schema/*.graphql',
  documents = ['./operations/*.graphql'],
}: Options): CodegenConfig => {
  return {
    schema,
    documents,
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
      './codegen/types.ts': {
        plugins: [addPlugin, 'typescript', 'typescript-resolvers'],
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
          addPlugin,
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
      './codegen/typeDefs.ts': {
        plugins: [addPlugin, '@pkg/typedefs-plugin'],
      },
      './codegen/introspection.json': {
        plugins: ['introspection'],
      },
    },
  };
};
