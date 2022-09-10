// 真正创建节点，将vnode创建为dom，是孤儿节点，不进行插入
export default function createElement(vNode) {
  let domNode = document.createElement(vNode.sel)
  if(vNode.text !== '' && (vNode.children === undefined || vNode.children.length === 0)) {
    domNode.innerText = vNode.text
  } else if(Array.isArray(vNode.children) && vNode.children.length > 0) {
    for(let i = 0; i < vNode.children.length; i++) {
      let ch = vNode.children[i]
      let chDom = createElement(ch)
      domNode.appendChild(chDom)
    }
  }
  vNode.elm = domNode
  return vNode.elm

}