import myVNode  from './vNode';
/**
 * 
 * @param {*} sel 
 * @param {*} data 
 * @param {*} c 
 * c可能是String， Object， 数组
 */
 export default function (sel, data, c) {
  if(arguments.length !== 3) {
    throw new Error('h函数必须穿入3个参数') 
  }
  if(typeof c === 'string' || typeof c === 'number') {
    return myVNode(sel, data, undefined, c, undefined)
  } else if(Array.isArray(c)) {
    let children = []
    for(let i = 0; i < c.length; i++) {
      if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))) {
        throw new Error('传入数组中有不是h函数') 
      }
        children.push(c[i])
    }
    return myVNode(sel, data, children, undefined, undefined)

  } else if(typeof c == 'object' && c.hasOwnProperty('sel')) {
    const children = [c]
    return myVNode(sel, data, children, undefined, undefined)
    // h函数
  } else {
    throw new Error('传入的第三个参数有误') 
  }

}
