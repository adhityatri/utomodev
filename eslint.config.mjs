// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    // Global ESLint settings
    ignores: ["dist", ".output", "node_modules", ".nuxt", "*.log"],
    rules: {
      // Base ESLint rules
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      semi: ["error", "always"],
      quotes: ["error", "double", { avoidEscape: true }],
      "comma-dangle": ["error", "always-multiline"],
      "arrow-parens": ["error", "always"],

      // Vue specific rules
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "warn",
      "vue/require-default-prop": "error",
      "vue/html-indent": ["error", 2],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always",
          },
        },
      ],
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: 3,
          multiline: 1,
        },
      ],
    },
  },
]);
