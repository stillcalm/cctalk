/**
 * @param {Function} func 需要防抖的函数
 * @param {Number} wait 延迟执行的时间（单位：毫秒）
 * @param {Boolean} immediate 是否立即执行
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  let result;
  let context;
  let args;
  const later = () => {
    timeout = null;
    if (!immediate) {
      result = func.apply(context, args);
      context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    const callNow = immediate && !timeout;
    if (callNow) {
      result = func.apply(context, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    return result;
  };
};

/**
 * @param {Function} func 需要节流的函数
 * @param {Number} delay 延迟执行的时间（单位：毫秒）
 * @param {Boolean} immediate 是否立即执行
 */
export const throttle = (func, delay, immediate = false) => {
  let lastCall = 0;
  let lastExec = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (immediate && now - lastExec >= delay) {
      func.apply(this, args);
      lastExec = now;
    } else if (now - lastCall >= delay) {
      func.apply(this, args);
      lastCall = now;
    }
  };
};

