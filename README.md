# Stickee ESLint Config

Stickee settings for [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/)

## What it does

- Lints JavaScript based on the latest standards
- Fixes formatting issues with Prettier
- Removes 99.99% of the problems QA finds with your JavaScript code*

<small>*no refunds</small>

## Upgrade

### 1.* -> 2.*

V2.0 no longer requires the following packages:

- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

and [updates the version numbers of a few packages](https://github.com/stickeepaul/eslint-config-stickeepaul/commit/9eb5da9f554e5b4eb140d1a94ffe70205ab60ad9).

The easiest way to upgrade is to:

- remove **all** `eslint-*` packages from your `package.json`
- rerun `npx install-peerdeps eslint-config-stickee`

## Install

> Optionally you can install [stickee-javascript-code-style](https://www.npmjs.com/package/stickee-javascript-code-style) and skip steps 2 & 4.

1. If you don't already have a `package.json` create one with `npm init`
2. Install the peer dependencies of the config (optional)
    ```
    npx install-peerdeps --dev eslint-config-stickee
    ```
3. Admire all the new devDependencies you have
4. Create an `.eslintrc` file in the root of your project's directory (optional)
    ```
    {
        "extends": [
            "stickee"
        ],
    }
    ```
5. Add any custom webpack path resolvers you use*:
    ```
    // this is used in Convert to allow the use of `import @/api`
    // which is set in the webpack config file
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "build/webpack.base.conf.js"
            }
        }
    },
    ```
6. Add a lint script into your `package.json`:
    ```
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    }
    ```
7. Write beautiful JavaScript that makes QA proud


\* 
The config file must **only** contain webpack settings - do **not** point it to a `webpack.mix.js` file as this contains Laravel mix code.

If you are using Laravel Mix you can create a new `webpack.config.js` file and reference it from `webpack.mix.js`:

#### webpack.mix.js
```js
mix.webpackConfig(require('./webpack.config.js'));
```

#### webpack.config.js
```js
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.join(__dirname, '/resources/js')
        }
    }
};
```

## Settings

You can override any of the ESLint or Prettier settings. 

```
{
    "extends": [
        "stickee"
    ],
    "rules": {
        "no-console": 2,
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 120,
                "tabWidth": 8,
                "semicolons": "false" // looking at you Rehan
            }
        ]
    }
}
```

**Note**
Overwriting Prettier settings requires you to rewrite all the settings.

## Editor installation

ESLint should be configured to run as a pre-commit hook on the project you're working on but there's no harm in running it on every save.

### PHPStorm

Refer to [the docs](https://www.jetbrains.com/help/phpstorm/eslint.html) for instructions on running ESLint from PHPStorm.

### VSCode

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Change your VSCode `settings.json` file:
    ```
    // These are all my auto-save configs
    "editor.formatOnSave": true,
    // turn it off for JS and JSX, we will do this via eslint
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    // tell the ESLint plugin to run on save
    "eslint.autoFixOnSave": true,
    // Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
    "prettier.disableLanguages": ["javascript", "javascriptreact"],
    ```

## Thanks

Wes Bos for putting his [config on GitHub](https://github.com/wesbos/eslint-config-wesbos).