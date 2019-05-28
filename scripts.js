var blendModes = 'color,color-burn,color-dodge,darken,difference,exclusion,hard-light,hue,lighten,luminosity,multiply,normal,overlay,saturation,screen,soft-light'.split(',');

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getRandomBlendMode (arr) {
  return blendModes[getRandomInt(0, blendModes.length)]
}

window.document.onload = function () {
  console.log('document load');

  // Make banner interactable
  var $banner = document.getElementById('banner');
  $banner.addEventListener('click', function () {
    this.style.backgroundBlendMode = getRandomBlendMode()
  })
  $banner.style.cursor = 'pointer'
  $banner.click();
}
