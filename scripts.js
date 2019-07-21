var blendModes = 'color,color-burn,color-dodge,darken,difference,exclusion,hard-light,hue,lighten,luminosity,multiply,normal,overlay,saturation,screen,soft-light'.split(',')
  , $banner
  , $ul
  , changeBlendModeIntervalRef;

function random (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function setBannerBlendMode (idx) {
  $banner.style.backgroundBlendMode = blendModes[idx];

  // Set active box state
  for (let i = 0; i < blendModes.length; i++) {
    $ul.children[i].className = (i === idx) ? 'active' : '';
  }
}

function setup () {
  $banner = document.getElementById('banner');
  $ul = document.createElement('ul');

  // Remove original image (progressive enhancement)
  if ($banner.children.length) {
    $banner.children[0].remove();
  }

  // Make banner interactable
  // Add carousel-like selection boxes for active blend mode
  for (let li, i = 0; i < blendModes.length; i++) {
    li = document.createElement('li');
    li.title = blendModes[i];
    li.addEventListener('mousedown', function () {
      setBannerBlendMode(i);
      clearInterval(changeBlendModeIntervalRef);
    });
    $ul.appendChild(li);
  }
  $banner.appendChild($ul);
  $ul.children[blendModes.indexOf('normal')].dispatchEvent(new Event('mousedown'));

  // Set random banner blend mode periodically
  changeBlendModeIntervalRef = setInterval(function () {
    setBannerBlendMode(random(0, blendModes.length));
  }, 20000);
}

document.addEventListener('DOMContentLoaded', setup, false);
console.log('This website was generated by my hands');
