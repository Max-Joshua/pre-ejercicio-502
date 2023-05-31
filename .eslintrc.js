module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
    "object-curly-spacing": ["error", "never"],
    "max-len": ["error", { code: 120 }],
  },
};
