function drawSquare (ctx, offset, size) {
  return new Promise(resolve => {
    drawFlimsySquare(ctx, offset, offset, size)
    resolve()
  })
}

function resolveAfterDelay (delay) {
  return function () {
    return (...args) => new Promise(resolve => {
      setTimeout(() => {
        console.log('resolved inner')
        resolve(...args)
      }, delay)
    })
  }
}

// Do work repeatedly with an optional break between each iteration
function performRepeatingWork (work, iterations, timeBetween=0) {
  return new Promise(finish => {
    let i = 0
    function perform () {
      const result = work()
      if (result instanceof Promise) {
        result.then(() => (i++ < iterations) ? setTimeout(perform, timeBetween, work) : finish())
      } else {
        (i++ < iterations) ? setTimeout(perform, timeBetween, work) : finish()
      }
    }
    perform()
  })
}

// TODO:ctx,  draw i l c o
function drawFlimsySquare(ctx, x, y, size) {
  const wait = resolveAfterDelay
  return Promise.resolve()
    .then(() => drawLine(x, y, x + size, y)).then(wait(100))
    .then(() => drawLine(x + size, y, x, y + size)).then(wait(100))

  // ctx.lineTo(x, y + size)
  // ctx.lineTo(x + size, y + size)
  // ctx.lineTo(x + size, y)
  // ctx.lineTo(x, y)
  // ctx.stroke()
}

function drawLine(xa, ya, xb, yb) {
  return Promise((done) => {
    ctx.beginPath()
    ctx.moveTo(xa, ya)
    ctx.lineTo(xb, yb)
    ctx.stroke()
    done()
  })
}

// Returns a number between (num - x) and (num + x)
function skewValue(num, x=5) {
  return getRandomIntInclusive(num - x, num + x)
}

// Returns a positive or negative version of supplied number by random
function moreOrLess(num) {
  return getRandomIntInclusive(0, 1) ? num : -num
}

// Returns a random integer between min (included) and max (included)
// NOTE: Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
