module.exports = {

    "env": {
        "browser": true,
        "node": true
    },

    "extends": [
        "airbnb",
        "prettier",
        "plugin:vue/recommended"
    ],

    "parser": 'vue-eslint-parser',
    "parserOptions": {
        // Use babel-eslint for JavaScript
        "parser": "babel-eslint",
        // With import/export syntax
        "sourceType": "module"
    },

    "rules": {
        "comma-dangle": 0,
        "import": 0,
        "max-len": 0,
        "no-console": 1,
        "no-underscore-dangle": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                  ".js",
                  ".jsx"
                ]
              }
        ],
        "vue/html-indent": ["error", 4]
    },

    "plugins": [
        "prettier",
        "vue"
    ],
}