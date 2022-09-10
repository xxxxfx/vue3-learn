export default function(attrsString) {
  if(attrsString == undefined) return []
   let isYinhao = false, point = 0
   const result = []
   for(let i = 0; i < attrsString.length; i++) {
    let char = attrsString[i];
    if(char === '"') {
      isYinhao = !isYinhao
    } else if(char === ' ' && !isYinhao) {
      // 遇见空格，且不在引号中
      console.log(i)
      if(!/^\s*$/.test(attrsString.substring(point, i))) {
        result.push(attrsString.substring(point, i).trim())
        point = i
      }
      
    }
   }
   // 循环结束之后，还剩一个属性没有push进去
   result.push(attrsString.substring(point))
   retsult = result.map(item => {
     const o = item.match(/^(.+) = "(.+)"$/)
     return {
      name: o[1],
      value: o[2]
     }
   })
}