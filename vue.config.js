module.exports = {
  pwa: {
    name: 'INDIE'
  },
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "INDIE Lab";
            return args;
        })
}
}