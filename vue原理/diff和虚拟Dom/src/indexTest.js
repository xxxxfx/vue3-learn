// import  h from './mySnabbdom/h'
// import patch from './mySnabbdom/patch'
// const myVnode = h('ul', {}, [
//   h('li', {}, 'A'),
//   h('li', {}, 'B'),
//   h('li', {}, [
//     h('div', {}, [
//       h('ol', {}, [
//         h('li', {}, 'hello嘻嘻hello'),
//         h('li', {}, 'hello')
//       ])
//     ])
//   ]),
// ])
// const container = document.getElementById('container');
// patch(container, myVnode)
// console.log('hello')
import test from './test';
console.log('进入main.js')
if (module.hot) {
  module.hot.accept('./test.js', function() {
    console.log('Accepting the updated printMe module!');
  })
}
test()