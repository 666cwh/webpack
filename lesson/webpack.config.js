const path = require('path');

// CommonJS语法
module.exports = {
  entry: "./src/index.js", //开始打包的文件
  output: {
    filename: 'bundle.js', //打包后的文件名字
    path: path.resolve(__dirname, 'dist'),  //打包后文件位置(绝对路径,注意需要引入webpack核心模块path,通过path.resolve(__dirname, '打包文件夹名称'),__dirname:webpack.config.js所在当前目录路径)
  }
}