//防抖包装函数
function debounceWrap(func, delay = 500, maxDelay = 2000) {
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
function formatDate(date, layout = "yyyy年MM月dd日") {
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

export {
  debounceWrap, //防抖包装函数
  formatDate, //格式化传入的时间戳data对象
};
