import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: [
            '.next/**',
            'node_modules/**',
            'out/**',
            'build/**',
            'dist/**'
        ]
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: tseslint.parser,
            globals: {
                console: 'readonly',
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                exports: 'writable',
                global: 'readonly',
                module: 'writable',
                require: 'readonly',
                React: 'readonly',
                JSX: 'readonly',
                window: 'readonly',
                document: 'readonly',
                boolean: 'readonly'
            }
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            'no-unused-vars': 'off',
            'no-console': 'warn'
        }
    }
];