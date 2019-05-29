var blendModes = 'color,color-burn,color-dodge,darken,difference,exclusion,hard-light,hue,lighten,luminosity,multiply,normal,overlay,saturation,screen,soft-light'.split(',')
  , $banner
  , interval;

function random (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function randomizeBlendMode (el) {
  el.style.backgroundBlendMode = blendModes[random(0, blendModes.length)];
}

function setup () {
  $banner = document.getElementById('banner');

  // Remove original image
  if ($banner.children.length) {
    $banner.children[0].remove();
  }

  // Make banner interactable
  $banner.addEventListener('click', function () {
    randomizeBlendMode($banner);
    clearInterval(interval);
  })
  $banner.style.cursor = 'pointer'
  $banner.click();

  // Change banner automatically until clicked
  interval = setInterval(function () {
    randomizeBlendMode($banner);
  }, 10000);
}

document.addEventListener('DOMContentLoaded', setup, false);
