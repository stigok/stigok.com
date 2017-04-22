$(() => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  ctx.strokeStyle = 'black'
  ctx.globalAlpha = .1
  const work = () => drawSquare(10, 80)
  const finished = () => console.log('finished doing all this work')
  // Draw some rectangles
  performRepeatingWork(work, 42, 60)
    .then(() => {
      console.log('last square about to drop')
    })
    .then(() => drawSquare(0, 42))
    .then(finished)
})
