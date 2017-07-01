// Strictly sends and receives JSON
// cb is called with (err, response) where response is a normal XMLHttpRequest
// response object, extended with a .json property.
(function (window) {
  window.req = function (url, method, data, cb) {
    if (!url) throw new Error('Missing URL')
    if (!cb) {
      cb = data
      data = null
    }

    const request = new XMLHttpRequest()

    request.addEventListener('load', function () {
      if (this.status === 200) {
        try {
          this.json = JSON.parse(this.responseText)
        } catch (e) {
          this.json = null
        }
        cb(null, this)
      } else {
        cb(this)
      }
    })

    request.addEventListener('error', function (err) {
      cb(err)
    })

    request.open(method, url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

    if (method === 'POST') {
      request.send(JSON.stringify(data))
    } else {
      request.send()
    }
  }
})(window)
