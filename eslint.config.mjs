import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config(
    {
      extends:["next/core-web-vitals", "next/typescript"],
      plugins: ["no-floating-promise"],
      rules: {"@typescript-eslint/no-floating-promises": "error",
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksConditionals: true,
        checksSpreads: true,
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
      }
    }
  ),
];

export default eslintConfig;
