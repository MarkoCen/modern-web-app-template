module.exports = {
  extends: [
    './rules/base',
    './rules/import',
    './rules/jest',
    './rules/jsdoc',
    './rules/json',
    // './rules/react-hooks',
    './rules/react',
    './rules/sonar',
    './rules/storybook',
    './rules/tailwindcss',
    './rules/typescript',
    './rules/prettier',
  ].map(require.resolve),
  rules: {},
};
