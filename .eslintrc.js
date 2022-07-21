module.exports = {
  "globals": {"RecordItem": true},
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  "overrides": [
    {
      "files": [
        "**/*.spec.js",
        "**/*.spec.jsx",
        '*.ts'
      ],
      "rules": {
        'no-undef': 'off'
      },
      "env": {
        "jest": true
      }
    }
  ]

}
