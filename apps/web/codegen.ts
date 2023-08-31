import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';

import type { CodegenConfig } from '@graphql-codegen/cli';

const typescriptPluginConfig = {
  enumsAsTypes: true,
  useTypeImports: true,
  strictScalars: true,
  dedupeFragments: true,
  avoidOptionals: false,
  immutableTypes: true,
};

const config: CodegenConfig = {
  schema: './graphql/modules/**/*.{graphql,ts}',
  documents: ['./graphql/documents/**/*.{graphql,ts}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './graphql/codegen/': {
      preset: 'client',
      presetConfig: {
        persistedDocuments: true,
        ...typescriptPluginConfig,
      },
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
      ],
    },
    './graphql/modules/': {
      preset: 'graphql-modules',
      presetConfig: {
        baseTypesPath: '../codegen/graphql-modules.ts',
        filename: 'resolvers/types.ts',
        ...typescriptPluginConfig,
      },
      config: {
        ...typescriptPluginConfig,
        contextType: 'GraphQLModules.Context',
      },
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        'typescript',
        'typescript-resolvers',
      ],
    },
  },
};

export default config;
