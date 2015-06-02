#module.exports = require('gametime-db')

path = require 'path'
os = require 'os'
fs = require 'fs'

dbpath = path.join os.tmpdir(), 'gametime.db'
fs.writeFileSync dbpath, fs.readFileSync require.resolve 'gametime-db/gametime.db'
sqlite3 = require 'gametime-db/node_modules/sqlite3'
module.exports = new sqlite3.Database dbpath
