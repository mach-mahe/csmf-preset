module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': null, // 指定声明块中属性的字母顺序
    'plugin/declaration-block-no-ignored-properties': true,
    'no-empty-source': null, // 不允许空的来源
    'color-no-invalid-hex': true, // 禁止无效的十六进制颜色
    'color-hex-case': 'lower', // 指定大写或小写十六进制的颜色
    'block-no-empty': true, // 不允许空块
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-before': null,
    'value-list-comma-newline-after': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
  },
};
