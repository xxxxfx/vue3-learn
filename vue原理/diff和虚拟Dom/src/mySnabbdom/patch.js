import vNode from './vNode';
import createElement from './createElement';

export default function patch(oldVnode, newVnode) {
  // 判断传入的第一个参数，是dom节点还是虚拟节点
  if(oldVnode.sel == '' || oldVnode.sel == undefined) {
    // 传入的第一个参数是DOM节点，包装成虚拟节点
    oldVnode = vNode(oldVnode.tagName.toLowerCase(), {}, [],undefined,oldVnode)
    console.log(oldVnode)
  }
  // oldnode和newnode是不是同一个节点
  if(oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {
    if(oldVnode === newVnode) return;
    if(newVnode.text !== undefined && (newVnode.children===undefined || newVnode.children.length === 0)) {
      // 老的节点是children或者text都会被替换掉
      oldVnode.elm.innerText = newVnode.text
    }
    // diff算法更新节点有四个指针新前/旧前 新后/旧后 新后/旧前 新前/旧后 
    console.log('是同一个节点')
  } else {
    console.log('不是同一个节点')
    // 创建出来新节点
    let newVnodeElm = createElement(newVnode)
    if(oldVnode.elm.parentNode && newVnodeElm) {
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
    }
    // 暴力删除旧的
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}