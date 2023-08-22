import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'graphql/**/schema/*.graphql',
  documents: ['graphql/**/client/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './graphql/codegen/': {
      preset: 'client',
      presetConfig: {
        persistedDocuments: true,
        useTypeImports: true,
        strictScalars: true,
        // namingConvention: 'change-case-all#capitalCase',
        enumsAsTypes: true,
        dedupeFragments: true,
        avoidOptionals: false,
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
        filename: 'codegen/types.ts',
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
