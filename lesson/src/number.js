function number() {
  // 创建div标签
  var div = document.createElement('div')
  div.setAttribute('id', 'number')
  //div内容为1000
  div.innerHTML = 2000
  // 将div挂载到body上
  document.body.appendChild(div)
}
export default number
