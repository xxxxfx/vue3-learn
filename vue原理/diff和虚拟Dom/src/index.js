import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
/**
 * {
 * sel:,
 * data:,
 * children
 * }
 * diff算法是将新的虚拟dom与老的虚拟dom进行diff
 * 1.虚拟dom如何渲染产生
 * 2.diff算法的原理
 * 3.虚拟dom通过diff变成真正的dom
 */



// 创建patch函数
const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);
/**
 * h函数的作用，得到虚拟节点
 * 虚拟节点的属性： {
 * children,
 * data: {},
 * elm:
 * key:
 * sel:
 * text}
 */
// 创建虚拟节点
const vNodeTest = h('a', { props: { href: 'https://www.baidu.com/'} }, '这是一个测试')
const vNodeTest2 = h('div', { class: { box: true} }, '这是盒子')

// h函数是可以嵌套的-》变成虚拟dom树
const vNodeTest3 = h('ul', { class: { box: true} }, [
  h('li',{key: 'A'}, 'A'),
  h('li', {key: 'B'},'B'),
  h('li',{key: 'C'}, 'C'),
  h('li', {key: 'D'},'D'),
])
// key是dom节点的唯一标识，告诉diff算法更改前后他们是同一个dom节点（最小量更新）
// 同一个虚拟节点选择器相同且key相同，同一个虚拟节点财进行精细化比较
// 同层比较，不会跨层比较，及时是同一片虚拟节点，但是跨层了，精细化比较不会diff而是暴力拆除
const vNodeTest4 = h('ul', { class: { box: true} }, [
  h('li',{key: 'E'}, 'E'),
  h('li',{key: 'A'}, 'A'),
  h('li', {key: 'B'},'B'),
  h('li',{key: 'C'}, 'C'),
  h('li', {key: 'D'},'D'),
])
const btn = document.getElementById('btn')
console.log('testttt', vNodeTest3)

//  // 让虚拟节点上树
 const container = document.getElementById('container')
 patch(container, vNodeTest3)
 btn.onclick = function() {
  patch(vNodeTest3, vNodeTest4)
 }
console.log('hello first loader')
