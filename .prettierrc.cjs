// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'always',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 80,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^#/(.*)$',
    '^types$',
    '^@/(.*)$',
    '^@/styles/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrderTypeScriptVersion: '5.0.0',
};

module.exports = config;
