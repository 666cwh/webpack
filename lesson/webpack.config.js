const path = require('path');

// CommonJS语法
module.exports = {
  mode: 'production',
  entry: "./src/index.js", //开始打包的文件
  module: { //打包模块
    rules: [ //规则,数组类型
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {  //额外参数
            name: '[name]_[hash].[ext]',  //placeholder 占位符
            outputPath: 'images',  //打包后文件存放的位置
            limit: 2048   //图片大小,当图片小于2kb时打包到bundle.js中,否则新建image文件夹存放
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js', //打包后的文件名字
    path: path.resolve(__dirname, 'dist'),  //打包后文件位置(绝对路径,注意需要引入webpack核心模块path,通过path.resolve(__dirname, '打包文件夹名称'),__dirname:webpack.config.js所在当前目录路径)
  }
}