// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    'plugin:vue/essential'
  ],
  rules: {
    // allow async-await
    "generator-star-spacing": 'off',
    "vue/attribute-hyphenation": ["error"],
    "vue/html-closing-bracket-newline": ['error', {
      'multiline': 'never'
    }],
    "vue/html-closing-bracket-spacing": ["error"],
    "vue/html-indent": ['error', 2, {
      'attribute': 1
    }],
    "vue/html-quotes": ["error"],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 2,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/mustache-interpolation-spacing": ["error"],
    "vue/no-multi-spaces": ["error"],
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
    "vue/prop-name-casing": ["error"],
    "vue/require-default-prop": ["error"],
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "fetch",
        "asyncData",
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        "head",
        ["template", "render"],
        "renderError"
      ]
    }],
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      "registeredComponentsOnly": false,
      "ignores": [
        // "/^van-/"
      ]
    }],
    "vue/component-tags-order": ["error", {
      "order": ["template", "script", "style"]
    }]
  }
}
