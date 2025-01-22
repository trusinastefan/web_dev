import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";

export default [

    js.configs.recommended,

    {
        languageOptions: {
            globals: {
                console: "readonly"
            }
        }
    },

    {
        plugins: {
            "@stylistic/js": stylisticJs
        },
        rules: {
            "@stylistic/js/brace-style": ["error", "1tbs"]
        }
    }
];