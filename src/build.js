const got = require('got')
const pug = require('pug')
const fs = require('fs')
const assert = require('assert')

const TEMPLATE = process.argv[2]
const OUTFILE = process.argv[3]
assert.ok(TEMPLATE, 'Missing first argument <template>')
assert.ok(OUTFILE, 'Missing second argument <outfile>')

;(async () => {
  try {
    const { body:blogposts } = await got('https://blog.stigok.com/posts.json', { json: true })
    const { body:soundcloudLikes } = await got('https://stigok.com/data/soundcloud-likes.json', {json: true })

    const locals = createLocals()
    locals.data.blogposts.push(...blogposts.splice(0, 5))
    locals.data.music.push(...soundcloudLikes.splice(0, 5))

    pug.renderFile(TEMPLATE, locals, (err, html) => {
      console.log('Compiled %s', TEMPLATE)
      fs.writeFileSync(OUTFILE, html)
      console.log('Wrote %s', OUTFILE)
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()

function createLocals () {
  return {
    site: {
      title: 'stigok u know',
      description: 'home of stigok',

      stylesheets: [
        'css/love.css'
      ],

      scripts: [
        'js/req.js',
        'js/main.js',
        'js/messages.js'
      ]
    },

    // Site data
    data: {
      links: [
        { name: 'My blog', url: 'https://blog.stigok.com' }
      ],
      projects: [
        { name: '"What is my IP?"', url: 'https://ip.stigok.com' }
      ],
      blogposts: [],
      music: [],
      publickey: {
        name: 'publickey.gpg',
        url: 'https://stigok.com/publickey.gpg',
        contents: '...'
      }
    },

    // Pug options
    pretty: true
  }
}

