module.exports = {
  env: {
    browser: true,
    node: true
  },

  extends: ["airbnb", "prettier", "plugin:vue/recommended"],

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
    import: 0,
    // disable methods on `console`
    "no-console": 1,
    // disallow dangling underscores
    "no-underscore-dangle": 0,
    // understand jsx files
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
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
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 4 spaces indent
    indent: "off",
    "vue/html-indent": ["error", 4],
    // only allow 1 vue/html attribute per line
    "vue/max-attributes-per-line": [
      1,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ],
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
