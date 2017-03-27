(function (document, window) {
  window.copyElementTextToClipboard = function (el) {
    let success
    try {
      console.log('clipboard el', el)
      el.select()
      success = document.execCommand('copy')
      if (!success) fallback(el.innerText.trim())
    } catch (e) {
      console.log(e)
      fallback(el.innerText)
    }
    return !!success
  }

  function fallback (text) {
    console.log('Could not copy to clipboard automatically. Using fallback.')
    window.prompt("Copy to clipboard: Ctrl+C / Cmd+C, Enter", text);
  }
})(document, window)
