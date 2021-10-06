function button() {
  // 创建div标签
  var div = document.createElement('div')
  //定义变量,初始值为0
  var i = 1
  div.innerHTML = i
  //按钮添加点击事件
  div.onclick = function () {
    //div内容为i++
    div.innerHTML = i++
  }
  // 将div挂载到body上
  document.body.appendChild(div)
}
export default button