// eslint.config.js
export default [
  {
    rules: {
      "semi": "error",
      "no-unused-vars": ["warn", { "args": "none" }]
    },
    languageOptions: {
      globals: {
        "LiteGraph": "readonly",
        "LGraph": "readonly",
        "LGraphCanvas": "readonly",
        "fetch": "readonly",
        "window": "readonly",
        "document": "readonly",
        "FileReader": "readonly",
        "encodeURIComponent": "readonly"
      }
    },
    files: ["frontend/**/*.js"]
  },
  {
    ignores: ["frontend/js/litegraph.js"]
  }
];
