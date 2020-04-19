module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [
            './node_modules'
          ]
        },
        prependData: `@import "@/styles/global.scss";`,
      },
    },
  }, 
}
