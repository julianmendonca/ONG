module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['@typescript-eslint', 'react', 'jest', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'tslint-config-prettier',
    'tslint-react',
    'tslint-eslint-rules',
    'tslint-config-prettier',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-console': 1,
    'prettier/prettier': 2
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', 'src/*.ts', 'src/*.tsx'],
      excludedFiles: '*.test.ts',
      rules: {
        quotes: ['error', 'single']
      }
    }
  ]
}
