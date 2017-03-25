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
      return document.querySelector(arguments[0])
    }
  }
})(window, document)
