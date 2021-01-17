module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      module: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx', '.ts'] }],
    'jsx-quotes': 'off',
    'linebreak-style': ['off', 'CRLF'],
    '@typescript-eslint/semi': 'error',
    'no-use-before-define': 'off',
    'no-undef': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
