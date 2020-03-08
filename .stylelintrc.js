module.exports = {
    ignoreFiles: [
      '**/node_modules/**',
    ],
    syntax: "scss",
    plugins: [
      "stylelint-scss",
      "stylelint-order"
    ],
    rules: {
      'declaration-empty-line-before': 'never',
      'indentation': 2,
      'no-missing-end-of-source-newline': null,
      'string-quotes': 'single',
      'order/properties-alphabetical-order': true
    },
  };
