(function (window) {
  const baseURL = 'https://ghibliapi.herokuapp.com'

  window.ghibli = {
    getCats: () => {
      const catId = '603428ba-8a86-4b0b-a9f1-65df6abef3d3'
      return request(`${baseURL}/species/${catId}`, {fields: 'name,people'})
        .then(species => {
          const requests = species.people.map(url => request(url))
          return Promise.all(requests)
        })
    }
  }

  function request (url, fields = {}) {
    return new Promise((resolve, reject) => {
      const params = Object.keys(fields).map(key => `${key}=${fields[key]}`)
      req(`${url}?${params.join('&')}`, (err, data) => {
        if (err) return reject(err)
        return resolve(data.json)
      })
    })
  }
})(window)
