//
// TODO: document.addEventListener('DOMready')
// - Multiple $() init functions must be possible
//
(function (window, document) {
  const _pending = []
  let hasResolved = false

  window.$ = function (arg) {
    const type = typeof arg
    if (type === 'function') {
      addPending(arg)
      return
    }
    if (type !== 'string') {
      throw new Error('Invalid argument')
    }
    if (arg.startsWith('#')) {
      return document.querySelector(arg)
    } else {
      return document.querySelectorAll(arg)
    }
  }

  window.onload = function () {
    console.log('Window loaded')
    resolve()
  }

  function resolve () {
    _pending.forEach((fn, i) => {
      console.log('Resolving startup function', i + 1)
      fn()
    })
    hasResolved = true
  }

  function addPending (fn) {
    if (hasResolved) {
      console.log('Run pending function immediately')
      fn()
    } else {
      _pending.push(fn)
      console.log('Enqueued startup function', _pending.length)
    }
  }

  console.log('$ loaded')
})(window, document)
