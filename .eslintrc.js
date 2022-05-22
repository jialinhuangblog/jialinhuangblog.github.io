// @ts-check

const basicExcludes = ['node_modules', 'out', '.next', '.history', '*tsbuildinfo']

/** @type {import('eslint').Linter.RulesRecord} */
const basicTSRules = {
  '@typescript-eslint/explicit-module-boundary-types': ['off'],

  // 命名規範
  '@typescript-eslint/naming-convention': [
    'error',
    {
      // I 開頭的 `interface` 命名模式早已棄用
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    },
    {
      // 業界傾向 typescript 關鍵字 `type` 和 `interface`
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],

  // Get up coding quality, can avoid confusing on reading code
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error'],

  // 使用 namespace 來讓 types 有個統一的前部變量，提供 vscode 自動完成很方便
  '@typescript-eslint/no-namespace': 'off',
}

/** @type {import('eslint').Linter.RulesRecord} */
const basicRules = {
  'react/prop-types': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  'react/react-in-jsx-scope': 'warn',

  // Can use in development mode, but don't let it get to the production
  'no-debugger': 'warn',
  'no-console': ['warn', { allow: ['warn', 'error'] }],

  'no-unreachable': 'error',
  /*
    About of 'react/display-name': ['error'],
    雖然很麻煩，但沒有好解法，維持住 error，原因是使得 devtool 方便 debug
    see https://github.com/yannickcr/eslint-plugin-react/issues/2133#issuecomment-569321619
  */
}

/** @type {import('eslint').Linter.BaseConfig} */
const config = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  env: {
    browser: true,
  },
  globals: {
    React: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      globalReturn: true,
      jsx: false,
    },
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: { ...basicRules },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: [...basicExcludes],
      rules: {
        ...basicRules,
        ...basicTSRules,

        // Make the global interface declarations works without eslint "no-undef" error
        'no-undef': 'off',
        '@typescript-eslint/no-misused-promises': ['error'],
        "@typescript-eslint/explicit-module-boundary-types": ["error"]
      },
    },
    {
      files: ['*.js'],
      excludedFiles: basicExcludes,
      env: { node: true },
      parser: '@babel/eslint-parser',
      rules: {
        ...basicRules,
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}

module.exports = config
