const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? '/' : "/",
  chainWebpack: config => {
      config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    // port: 8085, // 端口号
    host: "localhost",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:3000' // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',   //node.js服务器运行的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  //路径重写 
        }
       },
       '/disease': {
        target: 'https://view.inews.qq.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/disease': ''  //路径重写 
        }
       },
    } // 配置多个代理
  }
};