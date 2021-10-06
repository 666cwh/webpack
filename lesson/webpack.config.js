const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
//引入webpack
const webpack = require('webpack')


// CommonJS语法
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  // inline: map文件直接打包到main.js文件中
  // cheap: 只告知第几行出错, 不告知第几列
  // module: 业务代码 + 第三方模块报错
  // eval:通过evel的执行形式,生成对应关系

  // entry: "./src/index.js", //开始打包的文件
  entry: {
    main: './src/index.js',
  },
  devServer: {
    contentBase: 'dist',  //告诉服务器从哪个目录中提供内容,绝对路径
    open: true,  //自动打开浏览器
    hot: true, //开启Hot Module Replacement
    hotOnly: true  //不让浏览器自动刷新
  },
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    // publicPath: '/',  //所有打包生成的文件引用前都添加一个跟路径,确保打包的文件不会有路径问题
    filename: '[name].js', //打包后的文件名字
    path: path.resolve(__dirname, 'dist'),  //打包后文件位置(绝对路径,注意需要引入webpack核心模块path,通过path.resolve(__dirname, '打包文件夹名称'),__dirname:webpack.config.js所在当前目录路径)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'  //以指定路径下的html文件生成打包后的html文件
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}