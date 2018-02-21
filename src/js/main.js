var blendModes = 'color,color-burn,color-dodge,darken,difference,exclusion,hard-light,hue,lighten,luminosity,multiply,normal,overlay,saturation,screen,soft-light'.split(',')

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function toggleElementBlendMode () {
  this.style.backgroundBlendMode = blendModes[getRandomInt(0, blendModes.length)]
}

