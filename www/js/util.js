(function (window) {
  window.util = {}
  window.util.debounce = function (fn, delay = 1000) {
    let timeout
    return function () {
      let self = this
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn.apply(this, arguments)
        delete timeout
      }, delay)
    }
  }
})(window)
