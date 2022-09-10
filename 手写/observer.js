class Observer {
  constructor(data) {
    this.observer(data)
  }
  observer(obj) {
    if(obj && typeof obj === 'object') {
     Object.keys(obj).forEach(key => {
      this.defineReactive(obj, key, obj[key])
     })
    }
  }
  // {a: {b: 1}}
  defineReactive(obj, attr, value) {
    // 1，创建了属于当前属性的依赖收集对象
     let dep = new Dep();
    this.observer(value)
    Object.defineProperty(obj, attr, {
      get() {
        // 收集依赖
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set(newVal) {
        if(value !== newVal) {
          this.observer(newVal)
          value = newVal
          // 通知到视图更新
        dep.notify();
        }

      }
    })

  }
}
class Dep {
  constructor() {
    this.sub = []
  }
  // 添加订阅制
  addSub(watcher) {
    this.sub.push(watcher)

  }
  // 发布订阅者
  notify() {
    this.sub.forEach(watcher => watcher.update())
  }
}
 class Watcher {
  constructor(vm, attr, cb) {
    this.vm = vm;
    this.attr = attr;
    this.cb = cb
    this.oldValue = this.getOldValue()
  }
  getOldValue() {
    Dep.target = this;
    let oldValue = CompilerUtil.getValue(this.vm, this.attr);
    Dep.target = null;
    return oldValue
  }
  update() {
    let newValue = CompilerUtil.getValue(this.vm, this.attr);
    if(newValue !== this.oldValue) {
      this.cb(newValue, this.oldValue)
    }
  }
 }