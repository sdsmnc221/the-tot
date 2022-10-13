const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/vars/index.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("glsl")
      .test(/\.(glsl|vs|fs|vert|frag)$/)
      .exclude.add(/node_modules/)
      .end()
      .use("raw-loader")
      .loader("raw-loader")
      .end()
      .use("glslify-loader")
      .loader("glslify-loader")
      .end();

    // const svgRule = config.module.rule("svg");
    // svgRule.uses.clear();
    // svgRule
    //   .use("babel-loader")
    //   .loader("babel-loader")
    //   .end()
    //   .use("vue-svg-loader")
    //   .loader("vue-svg-loader");
  },
  configureWebpack: (config) => {
    config.experiments = {
      asyncWebAssembly: true,
    };
  },
});
