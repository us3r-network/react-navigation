module.exports = {
  root: true,
  extends: 'satya164',
  plugins: ['simple-import-sort'],
  settings: {
    'react': {
      version: '16',
    },
    'import/core-modules': [
      '@react-navigation/core',
      '@react-navigation/native',
      '@react-navigation/routers',
      '@react-navigation/stack',
      '@react-navigation/native-stack',
      '@react-navigation/drawer',
      '@react-navigation/bottom-tabs',
      '@react-navigation/material-top-tabs',
      '@react-navigation/elements',
      '@react-navigation/devtools',
      'react-native-drawer-layout',
      'react-native-tab-view',
    ],
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native',
            importNames: ['Text'],
            message: 'Import `Text` from `@react-navigation/elements` instead.',
          },
          {
            name: '@react-navigation/core',
            message: 'Import from `@react-navigation/native` instead.',
          },
        ],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    'import/no-default-export': 'error',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['packages/{native,devtools}/src/**'],
      rules: {
        'no-restricted-imports': ['error', { paths: [] }],
      },
    },
    {
      files: ['example/e2e/tests/*.ts'],
      rules: {
        'jest/*': 'off',
      },
    },
    {
      files: ['scripts/*.js', 'netlify/functions/**/*.js'],
      rules: {
        'import/no-commonjs': 'off',
      },
    },
    {
      files: ['**/config/*.{ts,js}', '*.config.{ts,js}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
