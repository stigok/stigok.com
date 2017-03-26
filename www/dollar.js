//
// TODO: document.addEventListener('DOMready')
//
(function (window, document) {
  window.$ = function () {
    if (typeof arguments[0] === 'function') {
      var readyFn = arguments[0]
      var isReady
      new Promise(resolve => {
        isReady = resolve
      }).then(readyFn)
      window.onload = isReady
    } else {
      const selector = arguments[0]
      if (selector.startsWith('#')) return document.querySelector(selector)
      else return document.querySelectorAll(selector)
    }
  }
})(window, document)
