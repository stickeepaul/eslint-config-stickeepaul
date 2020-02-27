module.exports = {
  env: {
    browser: true,
    node: true
  },

  extends: [
      require.resolve('eslint-config-airbnb-base'),
      "plugin:vue/recommended",
      "eslint:recommended",
      require.resolve('eslint-config-prettier'),
      require.resolve('eslint-config-prettier/vue')
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    // Use babel-eslint for JavaScript
    parser: "babel-eslint",
    // With import/export syntax
    sourceType: "module"
  },
  rules: {
    // disallow trailing commas
    "comma-dangle": ["error", "never"],
    // allow `console` methods during development production
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // disallow dangling underscores
    "no-underscore-dangle": 0,
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never"
      }
    ],
    // disallow parameter object manipulation except for specific exclusions
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e" // for e.returnvalue
        ]
      }
    ],
    // 4 spaces indent
    indent: "off",
    "vue/html-indent": ["error", 4],
    // enforce a maximum line length
    // except for urls and strings
    "max-len": [
      "error",
      140,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreStrings: true,
        ignoreTemplateLiterals: false
      }
    ],
    // prettier settings
    // if these are overridden then
    // the whole array needs overriding
    "prettier/prettier": [
      "error",
      {
        tabWidth: 4,
        singleQuote: true
      }
    ]
  },
  plugins: ["prettier", "vue"]
};
