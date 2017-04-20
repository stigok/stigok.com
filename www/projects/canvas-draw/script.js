const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.strokeStyle = 'black'
ctx.globalAlpha = .1

function drawSquare (offset, size) {
  return new Promise(resolve => {
    drawFlimsySquare(offset, offset, size)
    resolve()
  })
}

function resolveAfterDelay (delay) {
  return (...args) => new Promise(resolve => {
    setTimeout(() => resolve(...args), delay)
  })
}

// Draw some rectangles
function performRepeatingWork (fn, rounds, delay) {
  return new Promise(resolve => {
    let promise
    for (let i = 0; i < rounds; i++) {
      promise = (promise || fn())
      .then(resolveAfterDelay(delay))
      .then(() => fn())
    }
    promise.then(resolve)
  })
}

const offset = 10
const size = 100
performRepeatingWork(() => drawSquare(offset, size), 50, 50)
  .then(() => drawSquare(0, 42))

function drawFlimsySquare(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(skewValue(x), skewValue(y + size));
  ctx.lineTo(skewValue(x + size), skewValue(y + size));
  //ctx.moveTo(x + size, y + size)
  ctx.lineTo(skewValue(x + size), skewValue(y));
  ctx.lineTo(skewValue(x), skewValue(y));
  ctx.stroke();
}

function skewValue(value, bounds=5) {
  const skew = getRandomIntInclusive(0, bounds)
  console.log(`skew is ${skew}`)
  return getRandomIntInclusive(0, 1) ? value + skew : value - skew
}

function moreOrLess(num) {
  return getRandomIntInclusive(0, 1) ? num : -num
}

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
