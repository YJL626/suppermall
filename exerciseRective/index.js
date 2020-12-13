const Dep = class Dep {
  subscribe = new Set()
  depend() {
    if (activeUpdate) this.subscribe.add(activeUpdate)
  }
  notify() {
    this.subscribe.forEach(sub => sub())
  }
}

const observe = function (obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]
    const innerDep = new Dep;
    Object.defineProperty(obj, key, {
      get() {
        innerDep.depend();
        return internalValue
      },
      set(newValue) {
        if (newValue === internalValue) return;
        internalValue = newValue;
        innerDep.notify()
      }
    })
  })
}
const obj = { a: 50, b: 30, c: 60 }
observe(obj)// 初始化
function update() {
  document.querySelector('body').textContent = JSON.stringify(obj)
}

let activeUpdate = null;
function autorun(update) {
  function wrap() {
    activeUpdate = wrap;
    update()//update运行时会访问obj对应的key，访问时触发getter，activeUpdate为true时会自动添加依赖。
    activeUpdate = null;
  }
  wrap()
}
autorun(update)//通过autorun函数运行时读取到Obj value将会被添加到inner dep中