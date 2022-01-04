/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/v-on-function-call': ['warn', 'never'],
    'vue/require-emit-validator': ['error'],
    'vue/require-explicit-emits': ['error'],
    'vue/prefer-separate-static-class': ['error'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/no-unused-refs': ['error'],
    'vue/no-unused-properties': ['error'],
    'vue/no-undef-properties': ['error'],
    'vue/no-duplicate-attr-inheritance': ['warn'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: false }
    ],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/v-on-event-hyphenation': ['error', 'never', { autofix: true }],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['route', 'script', 'template', 'style']
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.spec.{js,ts,jsx,tsx}',
        'cypress/integration/**.spec.{js,ts,jsx,tsx}'
      ],
      extends: ['plugin:cypress/recommended']
    }
  ]
};
