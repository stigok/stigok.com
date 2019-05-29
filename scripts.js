var blendModes = 'color,color-burn,color-dodge,darken,difference,exclusion,hard-light,hue,lighten,luminosity,multiply,normal,overlay,saturation,screen,soft-light'.split(',');

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getRandomBlendMode (arr) {
  return blendModes[getRandomInt(0, blendModes.length)]
}

document.addEventListener('DOMContentLoaded', function(){
  var $banner = document.getElementById('banner');

  // Remove original image
  if ($banner.children.length) {
    $banner.children[0].remove();
  }

  // Make banner interactable
  $banner.addEventListener('click', function () {
    this.style.backgroundBlendMode = getRandomBlendMode()
  })
  $banner.style.cursor = 'pointer'
  $banner.click();
}, false);
