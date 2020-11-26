module.exports = {
  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule('svg');

  //   svgRule.uses.clear();
  //   svgRule
  //     .oneOf('inline')
  //     .resourceQuery(/inline/)
  //     .use('babel-loader')
  //     .loader('babel-loader')
  //     .end()
  //     .use('vue-svg-loader')
  //     .loader('vue-svg-loader')
  //     .end()
  //     .end()
  //     .oneOf('external')
  //     .use('file-loader')
  //     .loader('file-loader')
  //     .options({
  //       name: 'assets/[name].[hash:8].[ext]',
  //     });
  // },
  css: {
    loaderOptions: {
      sass: {
        sourceMap: true,
        sassOptions: {
          indentedSyntax: true,
          outputStyle: "compressed",
        },
        prependData: '@import "~@/assets/scss/main.scss";',
      },
    },
  },
  assetsDir: '@/assets/',
  pluginOptions: {
    storybook: {
      allowedPlugins: [
        'define'
      ]
    }
  }
};