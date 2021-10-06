const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
// webpack编译器,便于随时进行代码编译
const complier = webpack(config);

//创建服务器实例
const app = express()

//通过use()使用app实例的webpackDevMiddleware中间件
//webpackDevMiddleware(编译器,{配置项})
//当文件发生改变,使用配置项打包编译
app.use(webpackDevMiddleware(complier, {
  // publicPath: config.output.publicPath
}))

//监听端口,服务器启动成功打印ok
app.listen(3000, () => {
  console.log('Ok')
})