module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    'no-global-assign': ['error', { 'exceptions': ['exports'] }],
    'no-implicit-globals': 'off',
    'object-curly-spacing': ['error', 'always'],
    'prefer-reflect': ['off']
  }
};
