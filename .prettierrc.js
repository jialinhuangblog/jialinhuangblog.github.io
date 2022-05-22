/**
 * @type{{ overrides: { files: string | string[], options: import('prettier').Options }[] }}
 */
const overrides = {
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'babel',
        printWidth: 100,
      },
    },
    {
      files: ['*.json', '.*rc'],
      options: {
        parser: 'json',
        printWidth: 100,
      },
    },
  ],
}

/**
 * @type{import('prettier').Options}
 */
const config = {
  singleAttributePerLine: true,
  arrowParens: 'avoid',
  bracketSpacing: true,
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  parser: 'typescript',
  proseWrap: 'preserve',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  printWidth: 100,
}

module.exports = { ...config, ...overrides }
