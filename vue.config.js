module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
  },
  configureWebpack: {
    devtool: 'eval-source-map',
    devServer: {
      compress: true,
      disableHostCheck: true // That solved it
    }
  }
}
