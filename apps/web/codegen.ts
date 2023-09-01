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
  schema: './graphql/modules/**/schema/*.graphql',
  documents: ['./graphql/modules/**/operations/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './graphql/codegen/types.ts': {
      plugins: ['typescript'],
    },
    './graphql/modules': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: '../codegen/types.ts',
        fileName: 'index',
        extension: '.ts',
      },
      plugins: [
        {
          add: {
            content: [
              '/* eslint-disable */',
              '/* DO NOT EDIT THIS AUTO-GENERATED FILE */',
            ],
          },
        },
        {
          add: {
            placement: 'append',
            content: [
              'module.hot?.accept();',
              '/* DO NOT EDIT THIS AUTO-GENERATED FILE */',
            ],
          },
        },
        'typescript-operations',
        {
          'typescript-rtk-query': {
            importBaseApiFrom: '@store/base-query',
            exportHooks: true,
            overrideExisting: 'module.hot?.status() === "apply"',
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
            content: [
              '/* eslint-disable */',
              '/* DO NOT EDIT THIS AUTO-GENERATED FILE */',
            ],
          },
        },
        'typescript',
        'typescript-resolvers',
      ],
    },
    './graphql/codegen/introspection.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
