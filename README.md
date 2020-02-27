# Stickee ESLint Config

Stickee settings for [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/)

## What it does

- Lints JavaScript based on the latest standards
- Fixes formatting issues with Prettier
- Removes 99.99% of the problems QA finds with your JavaScript code*

<small>*no refunds</small>

## Installation

These settings can be installed globally or locally. It's best to install them locally on new projects.

### Local installation

1. If you don't already have a `package.json` create one with `npm init`
2. Install the peer dependencies of the config:
    ```
    npx install-peerdeps --dev eslint-config-stickee
    ```
3. Admire all the new devDependencies you have
4. Create an `.eslintrc` file in the root of your project's directory:
    ```
    {
        "extends": [
            "stickee"
        ],
    }
    ```
5. Add any custom webpack path resolvers you use:
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

### Global installation

This is useful for catching any code that hasn't been set up to use ESLint yet.

1. Install globally:
    ```
    npx intall-peerdeps --global eslint-config-stickeepaul
    ```
2. Create a global `.eslintrc` file. ESLint looks for this in your home directory:
    `~/.eslintrc` for Mac/Linux
    `C:\Users\you\.eslintrc` for Windows

    It should look like:
    ```
    {
        "extends": [
            "stickee"
        ]
    }
    ```
3. You can now run `eslint .` to lint all the files in your current directory

### Settings

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

### Editor installation

ESLint should be configured to run as a pre-commit hook on the project you're working on but there's no harm in running it on every save.

#### PHPStorm

Refer to [the docs](https://www.jetbrains.com/help/phpstorm/eslint.html) for instructions on running ESLint from PHPStorm.

#### VSCode

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