module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:markdown/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: true
    },
    plugins: ['html', 'react', 'react-hooks', '@typescript-eslint', 'markdown'],
    overrides: [
        {
            files: ['**/*.md',"**/*.mdx"],
            processor: 'markdown/markdown'
        },
        {
            files: [
                '**/*.md/*.ts',
                '**/*.md/*.tsx',
                '**/*.md/*.js',
                '**/*.md/*.jsx'
            ],
            rules: {
                'unused-imports/no-unused-imports': 0
            }
        }
    ],
    globals: {
        Window: true
    },
    rules: {
        'prettier/prettier': 'off',
        'react/jsx-max-props-per-line': [
            1,
            {
                maximum: 3,
                when: 'multiline'
            }
        ],
        'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
        'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖

        'react/no-deprecated': 0,
        'react/react-in-jsx-scope': 0,
        '@typescript-eslint/no-explicit-any': 0,
        "@typescript-eslint/no-var-requires": 0,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
    },
    settings: {
        react: {
            version: 'detect' // auto-detect React version from package.json.
        }
    }
};
