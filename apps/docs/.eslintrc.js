/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@turbo-ecom/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
