
// import number from './number'
// import button from './button'


// button()
// number()
// // Hot Module Replacement是否为true
// if (module.hot) {
//   //监听number.js
//   module.hot.accept('./number', () => {
//     document.body.removeChild(document.getElementById('number'))
//     number()
//   })
// }

// const arr = [
//   new Promise(() => { }),
//   new Promise(() => { })
// ]

// arr.map(item => {
//   console.log(item)
// })

import "@babel/polyfill";

import React, { Component } from "react";
import ReactDOM from "react-dom";

class APP extends Component {
  render() {
    return (<div>hellon world</div>)
  }
}

ReactDOM.render(<APP />, document.getElementById('root'))
