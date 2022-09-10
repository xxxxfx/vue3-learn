# 虚拟dom
 真正的dom转换为虚拟对象，包含了三个属性
 <div class = 'box'>
 <h3>hello </h3>
 </div>
 # 虚拟dom
 {
   sel: 'div' // 选择器
   data:  {
     class: {box: true}
   }
   children: [
     sel: 'h3',
     data: {},
     text: 'hello'
   ]

 }