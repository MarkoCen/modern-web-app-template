module.exports = {
  overrides: [
    {
      files: '**/*.[jt]s?(x)',
      extends: ['plugin:tailwindcss/recommended'],
      settings: {
        tailwindcss: {
          cssFiles: [
            '**/*.css',
            '**/*.pcss',
            '!**/node_modules',
            '!**/.*',
            '!**/dist',
            '!**/lib',
            '!**/build',
          ],
        },
      },
      rules: {
        // Detect classnames which do not exist
        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-custom-classname.md
        'tailwindcss/no-custom-classname': 'error',

        // Warn about contradictions in the classnames you are attaching to an element.
        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-contradicting-classname.md
        'tailwindcss/no-contradicting-classname': 'error',
      },
    },
  ],
};
