/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-selector-bem-pattern"],
  rules: {
      "selector-class-pattern": null,
      "plugin/selector-bem-pattern": {
        "componentName": "[A-Z]+",
        "componentSelectors": {
          "initial": "^\\.{componentName}(?:-[a-z]+)?$",
          "combined": "^\\.combined-{componentName}-[a-z]+$"
        },
        "utilitySelectors": "^\\.util-[a-z]+$"
      },
    }
};
