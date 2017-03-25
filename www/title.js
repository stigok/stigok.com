function showSomeLove (document) {
  const love = ' <3'
  setInterval(() => {
    document.title += love
    setTimeout(() => {
      document.title = document.title.substr(0, document.title.length - love.length)
    }, 1000)
  }, 2000)
}
