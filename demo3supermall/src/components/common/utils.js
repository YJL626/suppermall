//防抖包装函数
export function debounceWrap(func, delay = 500, maxDelay = 2000) {
  let isRunning = null;
  let starTime = null;
  return function(...arg) {
    if (!starTime) starTime = Date.now(); //初始化startTime
    if (isRunning) clearTimeout(isRunning); //刷新执行时间
    if (starTime && isRunning && Date.now() - starTime > maxDelay) {
      //超时，直接执行
      func.apply(this, arg);
      starTime = isRunning = null;
    }
    isRunning = setTimeout(() => {
      func.apply(this, arg);
      starTime = isRunning = null;
    }, delay);
  };
}
//格式化传入的时间戳data对象
export function formatDate(date, layout = "yyyy年MM月dd日") {
  date = typeof date === "object" ? date : new Date(date);

  if (Object.getPrototypeOf(date).constructor !== Date) return;
  //避免长度低于预期，直接+00
  let obj = {
    "y+": "00" + date.getFullYear(),
    "M+": "00" + (date.getMonth() + 1),
    "d+": "00" + date.getDate(),
    "h+": "00" + date.getHours(),
    "m+": "00" + date.getHours(),
    "s+": "00" + date.getSeconds(),
  };
  return Object.entries(obj).reduce(
    (str, [key, value]) =>
      str.replace(new RegExp(key), (match) => cut(value, match.length)),
    layout
  );

  function cut(value, length) {
    //接受一个长度和要保留的长度，从后往前截取
    return value.substring(value.length - length, value.length);
  }
}
//获取创建的类名
export function getConstructorName(item) {
  return Object.prototype.toString.call(item).slice(8, -1);
}
//深拷贝
export function deepClone(origin, set = new Set()) {
  //基本数据类型//和已经被copy过的数据，return
  if (
    typeof origin !== "object" ||
    origin === null ||
    origin === undefined ||
    set.has(origin)
  ) {
    return origin;
  }
  //判断是否为date regexp 对象
  if (origin instanceof Date || origin instanceof RegExp) {
    return new origin.constructor(origin);
  }

  set.add(origin); //copy之前添加将要被copy的对象，避免循环引用
  //数组对象

  if (Array.isArray(origin)) {
    return origin.reduce((target, item, index) => {
      target.push(deepClone(item), set);
      return target;
    }, origin.constructor());
  }
  //后面为普通的对象
  return Object.entries(origin).reduce((target, [key, value]) => {
    target[key] = deepClone(value, set);
    return target;
  }, new origin.constructor());
}
