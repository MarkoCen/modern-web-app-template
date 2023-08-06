module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        editorconfig: true,
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'css',
        jsxSingleQuote: true,
        printWidth: 80,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        semi: true,
        singleAttributePerLine: true,
        singleQuote: true,
        useTabs: false,
        trailingComma: 'all',
        tabWidth: 2,
      },
    ],
  },
};
