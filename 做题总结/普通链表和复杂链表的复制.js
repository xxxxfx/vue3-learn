// 普通链表
// 定义：
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// 普通节点的复制: 构建前驱节点pre 和 当前节点node， 前驱节点的next指向node， 编列整个列表
// function copyList(head) {
//   let dum = new Node(0);
//   let pre = dum; // pre相当于一个不断向后移动的指针
//   while(head !== null) {
//    const node = new Node(head.val);
//    pre.next = node;
//    pre = node;
//    head = head.next;
//   }
//   return dum.next
// }

// const a = {
//  'next': 6,
//  'val': 0
// }
// cur = a
class Node {
  constructor(val,next,random) {
    this.val = val;
    this.next = next;
    this.random = random
  }
}
// 复杂链表——》哈希表的做法 时间复杂度O（n）， 空间复杂度是O（n）
var copyRandomList = function(head) {
  if(head === null) {
      return null
  }
 // 哈希表
  let cur = head
  let mapSource = new Map()
  while(cur) {

      mapSource.set(cur, new Node(cur.val))
      cur = cur.next
  }
  cur = head
  while(cur) {
      let curnode = mapSource.get(cur)
      if(cur.next) {
        curnode.next = mapSource.get(cur.next)
      }
      if(cur.random) {
        curnode.random = mapSource.get(cur.random)
      }
      cur = cur.next
  }
  return mapSource.get(head)
};

function createList() {
  const node1 = new Node(1);
  const node2 = new Node(2);
  node1.next = node2;
  node1.random = node2;
  node2.next = null;
  node2.random = node1;
  return node1;

}
console.log('jieguo', copyRandomList(createList()))

// 解法2拼接
var copyRandomList2 = function(head) {
  let cur = head
  while(cur) {
    const next = cur.next;
    const node = new Node(cur.val)
    cur.next = node;
    node.next = next;
    cur = node.next;
  }
  cur = head
  while(cur) {
    const next = cur.next;
    next.random = cur.random.next
    cur = next.next
  }
  let res = head.next
  cur = head.next
  while(cur) {
    cur.next = cur.next.next
    cur = cur.next
  }
  return res
  
}
console.log('新链表', copyRandomList2(createList()))