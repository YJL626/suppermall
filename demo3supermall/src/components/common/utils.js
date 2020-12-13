
function debounceWrap(func, delay = 30, maxDelay = 2000) {
    let isRuning = null;
    let starTime = null;
    return function (...arg) {
        if (!starTime) starTime = Date.now(); //初始化starttime
        if (isRuning) clearTimeout(isRuning); //刷新执行时间
        if (starTime && isRuning && Date.now() - starTime > maxDelay) {
            //超时，直接执行
            func.apply(this, arg);
            starTime = isRuning = null;
        }
        isRuning = setTimeout(() => {
            func.apply(this, arg);
            starTime = isRuning = null;
        }, delay);
    };
}
export {
    debounceWrap
}