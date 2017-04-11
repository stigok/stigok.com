'use strict'

function NumberCount (el) {
  const maxtime = 1000
  const initial = parseInt(el.innerText) || 0
  const target = parseInt(el.dataset.targetCount)

  let i = initial
  const count = () => {
    if (i < target) {
      el.innerText = ++i
      setTimeout(count, Math.max(maxtime / target, 1))
    }
  }

  count()
}
