var graphqlUtils = require('@graphql-tools/utils');
var graphql = require('graphql');

// https://github.com/dotansimha/graphql-code-generator/issues/3899
var print = function (schema) {
  var escapedSchema = schema.replace(/\\`/g, '\\\\`').replace(/`/g, '\\`');

  return (
    "import gql from 'graphql-tag';\n\n" +
    'export const typeDefs = gql`' +
    escapedSchema +
    '`;'
  );
};

module.exports = {
  plugin: function (schema) {
    return print(
      graphql.stripIgnoredCharacters(
        graphqlUtils.printSchemaWithDirectives(schema),
      ),
    );
  },
};
