// 前序遍历(中的顺序在最前面)

/**
 * 
 *中左右的顺序
*先遍历左子树再遍历右子树
 */
// 方法1 使用递归的思想
// 方法2 遍历： 使用栈进行遍历
var preorderTraversal = function(root) {
  // 递归思想
  if(root === null) {
      return []
  }
  // const res = []
  // const search = function(root) {
  //     if(root!==null) {
  //         res.push(root.val)
  //     }
  //     if(root.left) {
  //         search(root.left)
  //     }
  //     if(root.right) {
  //         search(root.right)
  //     }
  // }
  // search(root)
  // return res
  // 使用栈
  const stack = []
  const res = []
  stack.push(root)
  while(stack.length) {
      const curNode = stack.pop()
      res.push(curNode.val)
      // 先进后出，先放右再放左
      if(curNode.right) {
          stack.push(curNode.right)
      }
      if(curNode.left) {
          stack.push(curNode.left)
      }
  }
  return res

};

// 中序遍历（中的位置是在中间）
/**
 * 
 */

 var inorderTraversal = function(root) {
  if(root === null) {
      return []
  }
  // 使用栈的方法
  let res = []
  let stack = []
  while(root) {
      stack.push(root)
      root = root.left
  }
  while(stack.length) {
      const cur = stack.pop()
      res.push(cur.val)
      if(cur.right) {
          let tem2 = cur.right
          while(tem2) {
              stack.push(tem2)
              tem2 = tem2.left
          }
      }   

  }
  return res
};
var inorderTraversal = function(root) {
  // 使用递归的方法 先展开左子树，再去找右子树
  if(root === null) {
      return []
  }
  const res = []
  const  search = function(root) {
      if(root === null) {
          return
      }
      if(root.left) {
          search(root.left)
      }
      res.push(root.val)
      if(root.right) {
          search(root.right)
      }
  }
  search(root)
  return res
};


// 后序遍历 左右中
/**
 * 展开左子树 展开右子树 将节点加入结果中
 */
 var postorderTraversal = function(root) {
  const res = []
  // 递归
  if(root === null) {
      return res
  }
  const order = function (root) {
      if(root === null) {
          return
      }
      if(root.left) {
          order(root.left)
      }
      if(root.right) {
          order(root.right)
      }
      res.push(root.val)
  }
  order(root)
  return res
};
var postorderTraversal = function(root) {
  const res = []
  if(root === null) {
      return res
  }
 // 栈的做法
 const stack = []
 while(root) {
     stack.push(root)
     root = root.left
 }
 let prePop = null
 while(stack.length) {
     let top = stack[stack.length - 1]
     if(top.right===null || (top.right!==null && prePop === top.right)) {
         prePop = stack.pop()
         res.push(top.val)
     } else {
         if(prePop!== top.right) {
             let temp = top.right
             while(temp) {
                 stack.push(temp)
                 temp = temp.left
             }
         } 
      //    else {
      //        prePop = stack.pop()
      //        res.push(top.val)
      //    }
     }
 }
  return res
};