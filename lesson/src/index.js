import number from './number'
import button from './button'


button()
number()
// Hot Module Replacement是否为true
if (module.hot) {
  //监听number.js
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}






