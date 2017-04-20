// Refresh every 3 seconds
//setTimeout(() => window.location.reload(), 5000);

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.strokeStyle = 'black'
ctx.globalAlpha = .1

let offset = 0
const drawSquare = () => {
  drawFlimsySquare(5 + offset, 5 + offset, 80)
  offset += moreOrLess(1)
}
drawSquare()
setInterval(drawSquare, 100)

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
