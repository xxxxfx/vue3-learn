vue的优势：
* MVVM数据驱动
* 组件化
组件化优势：
1.降低系统耦合度
2.方便调试
3.提高可维护性
* 指令系统（带v-前缀的，响应式的作用于dom）
# vue组建中的data是函数，但是根实例没有限制？
* 如果是函数会拿到getData（）中的结果， 每次使用组件，组件的data指向同一个地方，不同实例之间数据共享了