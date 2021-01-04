module.exports = (api, options, rootOptions) => {
    // 安装一些基础公共库
    api.extendPackage({
        dependencies: {

            "csmf-cli-helper": "^1.0.1"
        },
        devDependencies: {
            "@mapbox/stylelint-processor-arbitrary-tags": "^0.2.0",
            "@vue/cli-plugin-babel": "~4.5.0",
            "@vue/cli-plugin-eslint": "~4.5.0",
            "@vue/cli-plugin-router": "~4.5.0",
            "@vue/cli-plugin-vuex": "~4.5.0",
            "@vue/cli-service": "~4.5.0",
            "@vue/eslint-config-prettier": "^6.0.0",
            "babel-eslint": "^10.1.0",
            "babel-plugin-lodash": "^3.3.4",
            "eslint": "^6.7.2",
            "eslint-plugin-prettier": "^3.1.3",
            "eslint-plugin-vue": "^6.2.2",
            "less": "^3.0.4",
            "less-loader": "^5.0.0",
            "lodash-webpack-plugin": "^0.11.6",
            "prettier": "^1.19.1",
            "style-resources-loader": "^1.3.2",
            "stylelint": "^8.4.0",
            "stylelint-config-rational-order": "^0.1.2",
            "stylelint-config-standard": "^18.1.0",
            "stylelint-declaration-block-no-ignored-properties": "^2.3.0",
            "stylelint-order": "^4.1.0",
            "vue-cli-plugin-style-resources-loader": "~0.1.4",
            "vue-cli-plugin-stylelint": "0.0.2",
            "vue-template-compiler": "^2.6.11",
            "vue-auto-routing": "^0.5.0",
            "vue-cli-plugin-auto-routing": "~0.4.1",
        }
    });
    // 默认的serve和build命令，执行之前，校验并修复文件
    api.extendPackage({

        scripts: {
            "serve": "npm run eslint:fix && npm run prettier:format && npm run stylelint:fix && vue-cli-service serve",
            "build": "npm run eslint:fix && npm run prettier:format && npm run stylelint:fix && vue-cli-service build",
            "eslint:fix": "eslint \"src/**/*.{vue,js}\" --fix",
            "prettier:format": "prettier --write \"src/**/*.{vue,js}\"",
            "stylelint:fix": "stylelint \"src/**/*.{vue,css,less}\" --fix"
        }
    })

    // 公共模板目录
    api.render('./template');

}
