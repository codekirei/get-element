const browserify = require('browserify')
const fs = require('fs')
const p = require('path')
const root = require('app-root-path').toString()

const b = browserify()
b.require(p.join(root, 'index.js'), {expose: 'bGetElement'})
b.bundle((err, res) => {
  if (err) throw new Error(err)
  fs.writeFileSync(p.join(root,'test','fixtures','browserify-bundle.js'), res)
})
